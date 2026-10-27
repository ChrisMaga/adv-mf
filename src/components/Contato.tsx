"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { ENDERECO, EMAIL_CONTATO, HORARIO, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

const ASSUNTOS = [
  "Aposentadoria e INSS",
  "Direitos do trabalhador",
  "Isenções e direitos PcD, TEA e TDAH",
  "Inventário, plano de saúde ou imóveis",
  "Outro assunto",
];

type Estado = "idle" | "enviando" | "ok" | "erro";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: ASSUNTOS[0], mensagem: "", consentimento: false });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");

  const muda = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    setEstado("enviando");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setEstado("ok");
      } else {
        setErro(data?.error || "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.");
        setEstado("erro");
      }
    } catch {
      setErro("Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.");
      setEstado("erro");
    }
  };

  return (
    <section id="contato" className="bg-noturno text-gelo">
      <div className="container-site grid grid-cols-1 gap-14 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <p className="eyebrow m-0 text-ouro">Contato</p>
            <h2 className="h-section m-0">Agende seu atendimento</h2>
            <p className="m-0 text-[17px] text-suave">Presencial em Santo André ou online, no horário que for melhor para você.</p>
          </div>
          <ul className="m-0 flex list-none flex-col gap-[18px] p-0">
            <li className="flex gap-3.5">
              <MapPin aria-hidden="true" size={22} className="mt-[3px] shrink-0 text-ouro" />
              <span>
                {ENDERECO.rua}, {ENDERECO.bairro}
                <br />
                {ENDERECO.cidade} – {ENDERECO.uf}
              </span>
            </li>
            <li className="flex gap-3.5">
              <WhatsAppIcon size={22} className="mt-[3px] shrink-0 text-ouro" />
              <span>
                WhatsApp (secretaria):{" "}
                <a href={waLink()} target="_blank" rel="noopener" className="text-gelo">
                  {WHATSAPP_DISPLAY}
                </a>
                <br />
                Telefone:{" "}
                <a href={`tel:${PHONE_NUMBER}`} className="text-gelo">
                  {PHONE_DISPLAY}
                </a>
              </span>
            </li>
            <li className="flex gap-3.5">
              <Mail aria-hidden="true" size={22} className="mt-[3px] shrink-0 text-ouro" />
              <a href={`mailto:${EMAIL_CONTATO}`} className="text-gelo">
                {EMAIL_CONTATO}
              </a>
            </li>
            <li className="flex gap-3.5">
              <Clock aria-hidden="true" size={22} className="mt-[3px] shrink-0 text-ouro" />
              <span>{HORARIO}</span>
            </li>
          </ul>
          <p className="m-0 text-sm text-prata">
            Atendemos Santo André, São Bernardo do Campo, São Caetano do Sul e toda a região do Grande ABC.
          </p>
        </div>

        <div className="flex flex-col gap-[18px] rounded-xl bg-petroleo p-6 sm:p-9">
          <h3 className="m-0 font-title text-xl font-bold">Envie uma mensagem</h3>

          {estado === "ok" ? (
            <p role="status" className="m-0 rounded-md border border-ouro/40 bg-ouro/10 p-5 text-center font-title text-ouro">
              Mensagem enviada! Nossa equipe vai retornar em breve.
            </p>
          ) : (
            <form onSubmit={enviar} className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
                <input id="nome" name="nome" type="text" autoComplete="name" required value={form.nome} onChange={muda} className="input-site" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefone" className="text-sm font-medium">WhatsApp</label>
                  <input id="telefone" name="telefone" type="tel" autoComplete="tel" required value={form.telefone} onChange={muda} className="input-site" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={muda} className="input-site" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="assunto" className="text-sm font-medium">Assunto</label>
                <select id="assunto" name="assunto" value={form.assunto} onChange={muda} className="input-site">
                  {ASSUNTOS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensagem" className="text-sm font-medium">Conte brevemente sua situação</label>
                <textarea id="mensagem" name="mensagem" rows={4} required value={form.mensagem} onChange={muda} className="input-site resize-y" />
              </div>
              <div className="flex items-start gap-2.5">
                <input
                  id="consentimento"
                  name="consentimento"
                  type="checkbox"
                  required
                  checked={form.consentimento}
                  onChange={muda}
                  className="mt-[3px] h-5 w-5 shrink-0 accent-ouro"
                />
                <label htmlFor="consentimento" className="text-[13px] text-claro">
                  Li e concordo com a{" "}
                  <Link href="/privacidade" className="text-ouro">
                    Política de Privacidade
                  </Link>{" "}
                  e autorizo o uso dos meus dados para retorno deste contato.
                </label>
              </div>
              {estado === "erro" && (
                <p role="alert" className="m-0 text-center text-sm text-[#ffb4a8]">
                  {erro}
                </p>
              )}
              <button type="submit" disabled={estado === "enviando"} className="btn-ouro cursor-pointer disabled:opacity-60">
                {estado === "enviando" ? "Enviando..." : "Enviar mensagem"}
              </button>
              <p className="m-0 text-xs text-suave">
                Evite enviar laudos ou documentos médicos por aqui. Se forem necessários, pediremos durante o atendimento.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
