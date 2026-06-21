"use client";

import Image from "next/image";

const equipe = [
  {
    foto: "/fotoEduardo.jpeg",
    nome: "Dr. Eduardo Macedo Faria",
    cargo: "Sócio Fundador",
    oab: "OAB/SP 293.029",
    bio: "Especialista em Direito Previdenciário, Trabalhista e Isenções Fiscais, com mais de 20 anos de atuação no Grande ABC/SP (Santo André, São Bernardo e São Caetano). Atua fortemente em aposentadoria especial, benefício negado pelo INSS, revisões previdenciárias e cálculos de tempo de contribuição, com expertise específica na correção e retificação de PPP (Perfil Profissiográfico Previdenciário) para trabalhadores da indústria, metalúrgicos e profissionais expostos a agentes nocivos — uma das maiores demandas da região. Reconhecido pela abordagem humanizada, acessível e estratégica, sempre focada no resultado e na defesa dos direitos do segurado.",
  },
  {
    foto: "/fotoMalu.png",
    nome: "Dra. Maria Luiza Macedo Faria",
    cargo: "Sócia Advogada",
    oab: "OAB/SP 323.082",
    bio: "Especialista em Inventário, Sucessões, Planos de Saúde e Direito Imobiliário, com atuação estratégica no Grande ABC/SP — especialmente em Santo André, São Bernardo e São Caetano. Atua na resolução de inventários judiciais e extrajudiciais, negativas indevidas dos planos de saúde, disputas patrimoniais e conflitos imobiliários. Reconhecida pela postura acolhedora e pela condução clara e objetiva dos processos, oferece atendimento personalizado para famílias que precisam de segurança jurídica e orientação em momentos decisivos.",
  },
];

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PorQueEscolher() {
  return (
    <section id="escolher" className="py-20 px-6 bg-deepnavy">
      <div className="max-w-600 mx-auto">

        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light leading-16">
            Advogados no Grande ABC/SP especializados em Previdenciário, Trabalhista e Isenções Fiscais
          </span>

          <div className="divider mt-8 mx-auto" />
          <p className="section-desc max-w-285 mx-auto text-center">
            Atuamos há mais de 20 anos no Grande ABC (Santo André, São Bernardo e São Caetano) com foco em INSS, aposentadorias, benefício negado, revisões e direitos do trabalhador.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 max-w-300 mx-auto mb-20">
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
                <h3 className="font-title text-2xl font-extrabold text-light mb-1">
                  {membro.nome}
                </h3>
                <div className="font-title text-base tracking-[1.5px] text-muted/50 mb-4">
                  {membro.oab}
                </div>
                <p className="text-muted text-base leading-[1.8]">
                  {membro.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-muted/10 pt-16 flex flex-col items-center text-center gap-6">
          <p className="text-muted text-lg leading-[1.8] max-w-200">
            Atendemos todo o ABC Paulista: Santo André, São Bernardo, São Caetano e região.
Fale agora com um advogado especialista em INSS e Direito do Trabalhador.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#contato" className="btn-primary rounded-md hover:bg-zinc-400">
              Agendar Consulta
            </a>
            <a
              href="https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20Dr%20Eduardo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp rounded-md hover:bg-green-600"
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
