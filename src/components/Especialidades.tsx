"use client";

import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Previdência Social",
    description:
      "Orientação especializada em benefícios previdenciários — aposentadorias, pensões e auxílios. Análise cuidadosa do histórico de cada cliente para garantir que seus direitos sejam reconhecidos.",
    tags: ["Aposentadorias", "BPC/LOAS", "Revisões", "Isenção de IR"],
    href: "/previdenciario",
  },
  {
    number: "02",
    title: "Direito Trabalhista",
    description:
      "Atuação em situações relacionadas ao trabalho: rescisões, direitos não pagos e conflitos entre empregado e empregador. Foco em clareza, orientação precisa e condução responsável.",
    tags: ["Demissões", "Horas Extras", "FGTS", "Vínculo Empregatício", "Assédio Moral"],
    href: "/trabalhista",
  },
];

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-24 px-6 bg-deepnavy border-t border-muted/8"
    >
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-18 flex-wrap gap-6">
          <div>
            <span className="section-label">Áreas de Atuação</span>
            <h2 className="section-title mb-0!">Como posso te ajudar</h2>
          </div>
          <p className="section-desc max-w-95 text-[0.95rem]">
            Posso te ajudar nas áreas que mais afetam seu dia a dia com análise
            individualizada e condução segura em cada etapa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-0.5">
          {areas.map((area) => (
            <div
              key={area.number}
              className="service-card bg-navy/15 border border-muted/10 px-10 py-12 relative flex flex-col"
            >
              <span className="font-title text-[11px] font-bold tracking-[3px] text-muted/35 mb-8 block">
                {area.number}
              </span>

              <h3 className="font-title text-[1.5rem] font-bold text-light mb-4">
                {area.title}
              </h3>

              <p className="text-muted text-[0.95rem] leading-[1.8] mb-8 flex-1">
                {area.description}
              </p>

              <div className={`flex flex-wrap gap-2 ${area.href ? "mb-8" : ""}`}>
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-title text-[10px] font-semibold tracking-[1px] uppercase px-3 py-1.25 border border-muted/20 text-muted rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {area.href && (
                <Link
                  href={area.href}
                  className="font-title text-[11px] font-bold tracking-[2px] uppercase text-light inline-flex items-center gap-2 border-b border-light/30 pb-0.5 transition-[gap] duration-300 hover:gap-3 no-underline self-start"
                >
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-muted/8">
          <p className="text-muted mb-6 text-base">
            Se identificou com algum desses problemas?{" "}
            <strong className="text-light">Você tem direitos!</strong>
          </p>
          <a href="#contato" className="btn-primary">
            Agendar uma reunião
          </a>
        </div>
      </div>
    </section>
  );
}

