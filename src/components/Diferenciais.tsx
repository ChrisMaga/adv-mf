const diferenciais = [  
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Experiência Comprovada",
    desc: "Mais de 20 anos dedicados às áreas de Previdenciário e Trabalhista.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Atendimento Personalizado",
    desc: "Suporte completo com atualizações constantes e atenção individual em cada etapa do seu caso.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Foco na Solução",
    desc: "Atuação estratégica e direta, sem complicações. Cada caso tratado com método e clareza.",
  },
];

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-24 px-6 bg-navy relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(239,239,239,0.02) 80px,rgba(239,239,239,0.02) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(239,239,239,0.02) 80px,rgba(239,239,239,0.02) 81px)",
        }}
      />

      <div className="max-w-300 mx-auto relative z-1">
        {/* Header */}
        <div className="mb-18">
          <span className="section-label">Diferenciais</span>
          <h2 className="section-title">
            Por que confiar no<br />nosso serviço?
          </h2>
          <div className="divider" />
          <p className="section-desc">
            Aqui você recebe um atendimento humanizado, especializado e focado
            na sua vitória. Meu compromisso é com sua tranquilidade e justiça.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          {diferenciais.map((item, i) => (
            <div
              key={item.title}
              style={{ animation: `fadeUp 0.6s ${0.1 + i * 0.1}s ease both` }}
            >
              <div className="w-14 h-14 flex items-center justify-center border border-light/15 mb-6 text-light">
                {item.icon}
              </div>
              <h3 className="font-title text-[1.1rem] font-bold text-light mb-3">
                {item.title}
              </h3>
              <p className="text-muted text-[0.9rem] leading-[1.8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-18 p-12 border border-light/10 flex justify-between items-center flex-wrap gap-6 bg-deepnavy/40">
          <div>
            <h3 className="font-title text-[1.4rem] font-bold text-light mb-2">
              Pronto para garantir seus direitos?
            </h3>
            <p className="text-muted text-[0.95rem]">
              Não enfrente esse desafio sozinho. Confie em quem já ajudou centenas de pessoas.
            </p>
          </div>
          <a
            href="https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20Dr%20Eduardo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WaIcon />
            Falar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
