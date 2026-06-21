"use client";

import Link from "next/link";

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const areas = [
  {
    number: "01",
    title: "Direito Previdenciário e Benefícios do INSS",
    description:
      "Assessoria jurídica para aposentadorias, revisões de benefícios, auxílio-doença, pensão por morte, BPC/LOAS e demais direitos previdenciários. Atuamos para garantir que cada cliente receba os benefícios previstos em lei.",
    tags: [
      "Aposentadoria",
      "Revisão do INSS",
      "Auxílio-Doença",
      "BPC/LOAS",
      "Pensão por Morte",
      "Benefícios do INSS",
    ],
    href: "/previdenciario",
  },
  {
    number: "02",
    title: "Direito Trabalhista",
    description:
      "Atuação em verbas rescisórias, horas extras, FGTS, reconhecimento de vínculo empregatício, assédio moral e demais direitos do trabalhador. Análise completa para identificação de valores e direitos não recebidos.",
    tags: [
      "Horas Extras",
      "FGTS",
      "Rescisão Trabalhista",
      "Vínculo Empregatício",
      "Assédio Moral",
      "Direitos Trabalhistas",
    ],
    href: "/trabalhista",
  },
{
  number: "03",
  title: "Isenções Fiscais e Direitos da Pessoa com Deficiência",
  description:
    "Assessoria jurídica para obtenção de isenção de Imposto de Renda, benefícios assistenciais e direitos da pessoa com deficiência. Atuação em casos envolvendo TEA, autismo, TDAH e outras condições previstas na legislação.",
  tags: [
    "Isenção de IR",
    "Autismo (TEA)",
    "TDAH",
    "PCD",
    "IPVA",
    "Benefícios Assistenciais",
  ],
  href: "/isencoes-fiscais",
},
];

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-24 px-6 bg-muted border-t border-muted/8"
    >
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <span className="section-label text-navy">
            Áreas de Atuação Jurídica
          </span>
          <p className="section-desc leading-[1.8] text-navy max-w-4xl">
            Atendimento especializado em Direito Previdenciário, Trabalhista e
            Isenções Fiscais. Analisamos cada caso para identificar benefícios,
            direitos e oportunidades previstas na legislação.
          </p>
        </div>

        {/* Banner de Conversão */}
        <div
          className="relative mb-10 rounded-sm overflow-hidden border border-light/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,23,32,0.97) 0%, rgba(14,40,56,0.97) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <div className="relative px-10 py-12 md:px-16 md:py-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex-1">
              <p className="font-title text-[15px] font-bold tracking-[3px] uppercase text-light/40 mb-4">
                Análise Jurídica Gratuita
              </p>
              <h2 className="font-title text-[1.55rem] md:text-[2rem] font-black text-light leading-[1.2] mb-5">
                Descubra se Você Tem Direitos Que Ainda Não Está Recebendo
              </h2>
              <p className="text-muted text-xl leading-[1.8] max-w-4xl">
                Muitas pessoas possuem benefícios previdenciários, direitos
                trabalhistas ou isenções fiscais sem saber. Nossa equipe realiza
                uma análise jurídica para identificar oportunidades e garantir
                seus direitos.
              </p>
            </div>
            <div className="flex flex-col gap-5 shrink-0">
              <a
                href="#contato"
                className="btn-primary rounded-md whitespace-nowrap text-[0.95rem] md:text-[1rem] text-center"
              >
                Solicitar Análise Jurídica
              </a>
              <a
                href="https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20solicitar%20uma%20análise%20jurídica."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp rounded-md whitespace-nowrap justify-center text-[0.95rem] md:text-[1rem]"
              >
                <WaIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {areas.map((area) => (
            <div
              key={area.number}
              className="group service-card bg-linear-to-b from-[#0C3546] to-[#092A38] border border-[#1E4D62] px-10 py-12 relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-2xl"
            >
              <span className="font-title text-md font-bold tracking-[3px] text-[#7C98A8] mb-8 block transition-colors duration-300 group-hover:text-[#C8A96A]">
                {area.number}
              </span>

              <h3 className="font-title text-[1.4rem] font-bold text-white mb-4 leading-[1.3] transition-colors duration-300 group-hover:text-[#C8A96A]">
                {area.title}
              </h3>

              <p className="text-[#D7DEE5] text-xl leading-[1.8] mb-8 flex-1 transition-colors duration-300 group-hover:text-muted">
                {area.description}
              </p>

              <div
                className={`flex flex-wrap gap-2 ${area.href ? "mb-8" : ""}`}
              >
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-title text-xs font-semibold tracking-[1px] uppercase px-3 py-1.5 border border-[#2D5A70] text-[#E5E7EB] bg-[#0A2A38] rounded-xs transition-all duration-300 group-hover:border-[#C8A96A]/40 group-hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {area.href && (
                <Link
                  href={area.href}
                  className="font-title text-xs font-bold tracking-[2px] uppercase text-light inline-flex items-center gap-2 border-b border-light/30 pb-0.5 transition-all duration-300 hover:gap-3 hover:text-[#C8A96A] hover:border-[#C8A96A] no-underline self-start"
                >
                  Saiba mais
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 pt-8 border-t border-muted/8">
          <p className="text-navy mb-6 text-2xl">
            Seu caso merece uma{" "}
            <span className="font-bold">análise especializada.</span>
          </p>
          <a href="#contato" className="btn-primary rounded-md text-lg">
            Solicitar Análise Jurídica
          </a>
        </div>
      </div>
    </section>
  );
}
