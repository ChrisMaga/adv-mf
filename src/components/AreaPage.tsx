import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import Faq, { type Pergunta } from "@/components/Faq";
import { EMAIL_CONTATO, ENDERECO, HORARIO, SITE_URL, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

type Item = { t: string; d: string };
type Atendente = { foto: string; nome: string; oab: string; texto: string };

export type AreaPageProps = {
  slug: string;
  breadcrumb: string;
  eyebrow: string;
  titulo: string;
  intro: string;
  waTexto: string;
  situacoesTitulo: string;
  situacoes: Item[];
  destaque:
    | { tipo: "passos"; eyebrow: string; titulo: string; passos: Item[] }
    | { tipo: "texto"; eyebrow: string; titulo: string; paragrafos: string[] };
  documentos: string[];
  atendentes: Atendente[];
  faqTitulo: string;
  faqs: Pergunta[];
  ctaTitulo: string;
};

/** Modelo das páginas de área (Previdenciário, Trabalhista, Isenções). */
export default function AreaPage(p: AreaPageProps) {
  const wa = waLink(p.waTexto);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: p.breadcrumb, item: `${SITE_URL}/${p.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* HERO */}
      <section className="bg-noturno text-gelo">
        <div className="container-site flex flex-col gap-6 pb-[88px] pt-14">
          <nav aria-label="Você está em" className="text-[13px] text-prata">
            <Link href="/" className="text-prata">
              Início
            </Link>{" "}
            › <span className="text-gelo">{p.breadcrumb}</span>
          </nav>
          <p className="eyebrow m-0 text-ouro">{p.eyebrow}</p>
          <h1 className="m-0 max-w-[960px] font-title font-extrabold leading-[1.1]" style={{ fontSize: "clamp(34px, 4.6vw, 54px)" }}>
            {p.titulo}
          </h1>
          <p className="m-0 max-w-[760px] text-lg text-suave">{p.intro}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener" className="btn-ouro">
              <WhatsAppIcon />
              Falar sobre o meu caso
            </a>
            <a href="#situacoes" className="btn-contorno">
              Ver situações que atendemos
            </a>
          </div>
        </div>
      </section>

      {/* SITUAÇÕES */}
      <section id="situacoes" className="bg-gelo">
        <div className="container-site flex flex-col gap-11 py-[88px]">
          <div className="flex max-w-[760px] flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Situações que atendemos</p>
            <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              {p.situacoesTitulo}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.situacoes.map((s) => (
              <article key={s.t} className="flex flex-col gap-2.5 rounded-xl bg-white p-7">
                <h3 className="m-0 font-title text-xl font-bold">{s.t}</h3>
                <p className="m-0 text-[15px] text-texto">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section aria-label={p.destaque.eyebrow} className="bg-petroleo text-gelo">
        {p.destaque.tipo === "passos" ? (
          <div className="container-site flex flex-col gap-10 py-20">
            <div className="flex max-w-[760px] flex-col gap-3">
              <p className="eyebrow m-0 text-ouro">{p.destaque.eyebrow}</p>
              <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
                {p.destaque.titulo}
              </h2>
            </div>
            <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3">
              {p.destaque.passos.map((s, i) => (
                <li key={s.t} className="flex flex-col gap-2.5">
                  <span aria-hidden="true" className="font-title text-[40px] font-extrabold leading-none text-ouro">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-title text-[19px] font-bold">{s.t}</h3>
                  <p className="m-0 text-[15px] text-claro">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="container-site grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="eyebrow m-0 text-ouro">{p.destaque.eyebrow}</p>
              <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
                {p.destaque.titulo}
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-[17px] text-claro">
              {p.destaque.paragrafos.map((t) => (
                <p key={t} className="m-0">
                  {t}
                </p>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* DOCUMENTOS + QUEM ATENDE */}
      <section className="bg-white">
        <div className="container-site grid grid-cols-1 items-start gap-12 py-[88px] lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="eyebrow m-0 text-ouro-escuro">Para adiantar</p>
            <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>
              Documentos que ajudam na análise
            </h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {p.documentos.map((d) => (
                <li key={d} className="flex gap-3">
                  <Check aria-hidden="true" size={22} strokeWidth={2.4} className="mt-0.5 shrink-0 text-petroleo" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 text-sm text-texto">Não tem tudo? Não tem problema. No primeiro contato dizemos o que é essencial no seu caso.</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="m-0 font-title text-xs font-bold uppercase tracking-[0.12em] text-ouro-escuro">Quem atende</p>
            {p.atendentes.map((a) => (
              <article key={a.nome} className="flex items-center overflow-hidden rounded-xl bg-gelo">
                <Image src={a.foto} alt={a.nome} width={240} height={280} className="h-[150px] w-[120px] shrink-0 bg-petroleo object-cover object-[center_20%] sm:w-[140px]" />
                <div className="flex flex-col gap-1 px-6 py-5">
                  <h3 className="m-0 font-title text-lg font-bold">{a.nome}</h3>
                  <p className="m-0 text-[13px] font-semibold text-texto">{a.oab}</p>
                  <p className="m-0 text-sm text-texto">{a.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section id="duvidas" className="bg-gelo">
        <div className="mx-auto flex max-w-[880px] flex-col gap-9 px-6 py-[88px]">
          <div className="flex flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Dúvidas frequentes</p>
            <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              {p.faqTitulo}
            </h2>
          </div>
          <Faq itens={p.faqs} borda="#C9CDD3" />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-noturno text-gelo">
        <div className="container-site flex flex-wrap items-center justify-between gap-8 py-20">
          <div className="flex flex-[1_1_480px] flex-col gap-3">
            <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>
              {p.ctaTitulo}
            </h2>
            <p className="m-0 text-[17px] text-suave">
              Fale com a nossa equipe pelo WhatsApp ou venha ao escritório na {ENDERECO.rua}, {ENDERECO.bairro}, {ENDERECO.cidade}. {HORARIO}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener" className="btn-ouro">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL_CONTATO}`} className="btn-contorno">
              {EMAIL_CONTATO}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
