"use client";

import Image from "next/image";

const equipe = [
  {
    foto: "/fotoEduardo.jpeg",
    nome: "Dr. Eduardo Macedo",
    cargo: "Sócio Fundador",
    oab: "OAB/SP 293.029",
    bio: "Especialista em Direito Previdenciário e Trabalhista com mais de 20 anos de atuação. Reconhecido pela dedicação e pela linguagem acessível com cada cliente.",
  },
  {
    foto: "/fotoMalu.png",
    nome: "Dra. Maria Luiza Macedo",
    cargo: "Sócia Advogada",
    oab: "OAB/SP —",
    bio: "Atua na área de Direito Previdenciário e Trabalhista, com foco em soluções estratégicas e atendimento personalizado para cada demanda.",
  },
];

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PorQueEscolher() {
  return (
    <section id="escolher" className="py-24 px-6 bg-deepnavy">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: "inline-block" }}>Nossa Equipe</span>
          <h2 className="section-title mx-auto">
            Profissionais comprometidos<br />com o seu resultado
          </h2>
          <div className="divider mx-auto" />
          <p className="section-desc mx-auto text-center">
            Uma equipe dedicada, com experiência real e atendimento personalizado
            para defender seus direitos com eficiência.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-200 mx-auto mb-20">
          {equipe.map((membro) => (
            <div key={membro.nome} className="group bg-navy/20 border border-muted/10 hover:border-muted/25 transition-all duration-300">
              {/* Photo */}
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-deepnavy/80 via-deepnavy/10 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="font-title text-[10px] font-bold tracking-[2.5px] uppercase text-muted mb-2">
                  {membro.cargo}
                </div>
                <h3 className="font-title text-[1.2rem] font-extrabold text-light mb-1">
                  {membro.nome}
                </h3>
                <div className="font-title text-[11px] tracking-[1.5px] text-muted/50 mb-4">
                  {membro.oab}
                </div>
                <p className="text-muted text-[0.88rem] leading-[1.8]">
                  {membro.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-muted/10 pt-16 flex flex-col items-center text-center gap-6">
          <p className="text-muted text-[1rem] leading-[1.8] max-w-130">
            Não deixe seus direitos esperarem. Fale agora com nossa equipe e agende sua consulta.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#contato" className="btn-primary">
              Agendar Consulta
            </a>
            <a
              href="https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20Dr%20Eduardo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WaIcon />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
