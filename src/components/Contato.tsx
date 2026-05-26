"use client";

import { useState } from "react";

const inputBase =
  "w-full px-4 py-3.5 bg-navy/30 border border-muted/20 text-light font-body text-sm outline-none transition-colors duration-300 rounded-none focus:border-light/50";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const [erro, setErro] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setEnviado(true);
      } else {
        setErro("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    }
  };

  const labelClass = "block font-title text-[10px] font-bold tracking-[2px] uppercase text-muted mb-2";

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Endereço",
      value: "Rua do Bosque, 199, Jardim Bela Vista\nSanto André - SP, 09040-280",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Telefone / WhatsApp",
      value: "(11) 99117-5030\n(11) 99832-0101",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "E-mail",
      value: "advogadosmacedofaria@outlook.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      label: "Horário",
      value: "Seg a Sex, 09h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Info */}
          <div>
            <span className="section-label">Contato</span>
            <h2 className="section-title">
              Não deixe para depois o que pode mudar sua vida hoje
            </h2>
            <div className="divider" />
            <p className="section-desc mb-8">
              Muitas pessoas perdem direitos simplesmente por não procurar ajuda
              a tempo. Fale conosco agora, sem compromisso.
            </p>

            <div className="flex flex-col gap-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-light/15 flex items-center justify-center shrink-0 text-light">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-title text-[10px] font-bold tracking-[2px] uppercase text-muted mb-1">
                      {item.label}
                    </div>
                    <div className="text-light text-[0.9rem] leading-[1.6] whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-deepnavy/50 border border-muted/10 p-12">
            <h3 className="font-title text-[1.2rem] font-bold text-light mb-8">
              Solicite uma consulta gratuita
            </h3>

            {enviado ? (
              <div className="p-6 border border-whatsapp/30 bg-whatsapp/8 text-whatsapp font-title text-[0.95rem] text-center">
                ✓ Mensagem enviada! Entraremos em contato em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className={labelClass}>Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className={inputBase}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                      className={inputBase}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputBase} resize-y`}
                  />
                </div>
                {erro && (
                  <p className="text-red-400 font-title text-[0.85rem] text-center">{erro}</p>
                )}
                <button type="submit" className="btn-primary w-full justify-center mt-2">
                  Enviar Mensagem
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
