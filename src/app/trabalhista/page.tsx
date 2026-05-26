import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direito Trabalhista | Advocacia",
  description:
    "Especialistas em Direito Trabalhista: rescisões, FGTS, horas extras, assédio moral e vínculo empregatício. Defenda seus direitos trabalhistas.",
};

const servicos = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Rescisão Contratual",
    desc: "Verificação completa das verbas rescisórias para identificar irregularidades e garantir que você receba tudo o que tem direito: aviso prévio, férias proporcionais, 13º salário e multa do FGTS.",
    itens: ["Aviso Prévio", "Férias Proporcionais", "13º Salário", "Multa 40% FGTS", "Homologação"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Horas Extras",
    desc: "Muitos trabalhadores não recebem corretamente as horas trabalhadas além da jornada. Analisamos registros de ponto e comprovantes para calcular e reivindicar todos os valores devidos com os adicionais legais.",
    itens: ["Horas Extras não Pagas", "Adicional Noturno", "Banco de Horas", "Intervalos não Cumpridos", "Sobreaviso"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "FGTS",
    desc: "Fiscalização e cobrança dos depósitos do FGTS que não foram realizados pelo empregador, incluindo o período completo do contrato de trabalho com os devidos acréscimos legais.",
    itens: ["Depósitos em Atraso", "Saldo Não Sacado", "Multa Rescisória", "FGTS do Período"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Vínculo Empregatício",
    desc: "Reconhecimento judicial do vínculo de emprego para trabalhadores contratados como autônomos, PJ ou prestadores de serviço, mas que na prática exercem função de empregado com subordinação.",
    itens: ["Reconhecimento de Vínculo", "Fraude à CLT", "Pejotização", "Trabalho Informal"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Assédio Moral",
    desc: "Orientação e representação jurídica para vítimas de assédio moral no ambiente de trabalho — humilhações, pressão psicológica, constrangimentos e condutas abusivas por parte de superiores ou colegas.",
    itens: ["Humilhação Recorrente", "Pressão Psicológica", "Dano Moral", "Demissão por Represália"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Demissão por Justa Causa",
    desc: "Contestação de demissões por justa causa infundadas, convertendo em demissão sem justa causa com todos os direitos rescisórios devidos, incluindo seguro-desemprego e multa do FGTS.",
    itens: ["Reversão da Justa Causa", "Dano Moral", "Direitos Negados", "Seguro-Desemprego"],
  },
];

const alertas = [
  "Trabalhou sem registro em carteira",
  "Nunca recebeu horas extras mesmo trabalhando além do horário",
  "Foi demitido sem receber todas as verbas rescisórias",
  "Sofreu pressão psicológica ou humilhações no trabalho",
  "FGTS não foi depositado durante o contrato",
  "Rescisão por justa causa que considera injusta",
];

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Trabalhista() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center pt-30 pb-20 px-6 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(12,53,70,0.6) 0%, transparent 70%), var(--color-deepnavy)",
        }}
      >
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 font-title font-black leading-none select-none text-navy/20"
          style={{ fontSize: "clamp(200px,30vw,400px)", letterSpacing: "-10px" }}
        >
          CLT
        </div>

        <div className="max-w-300 mx-auto w-full relative z-1">
          <nav className="mb-8 flex gap-2 items-center">
            <Link href="/" className="font-title text-[11px] tracking-[1.5px] text-muted no-underline">
              Home
            </Link>
            <span className="text-muted/40 text-xs">›</span>
            <span className="font-title text-[11px] tracking-[1.5px] text-light">
              Direito Trabalhista
            </span>
          </nav>

          <span className="section-label">Área de Atuação</span>
          <h1
            className="font-title font-black text-light leading-[1.05] mb-6 max-w-175"
            style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", animation: "fadeUp 0.7s 0.1s ease both" }}
          >
            Direito Trabalhista
          </h1>
          <p
            className="text-muted text-[1.05rem] leading-[1.9] max-w-145 mb-10"
            style={{ animation: "fadeUp 0.7s 0.25s ease both" }}
          >
            Defesa dos seus direitos nas relações de trabalho. Rescisões, direitos não pagos,
            assédio moral e conflitos entre empregado e empregador, conduzidos com rigor
            técnico e compromisso total com o resultado.
          </p>
          <div className="flex gap-3.5 flex-wrap" style={{ animation: "fadeUp 0.7s 0.4s ease both" }}>
            <a
              href="https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20Dr%20Eduardo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WaIcon />
              Consulta Gratuita
            </a>
            <a href="/#contato" className="btn-outline">Agendar Reunião</a>
          </div>
        </div>
      </section>

      {/* Alerta */}
      <section className="py-16 px-6 bg-navy border-b border-muted/8">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Você sabia?</span>
              <h2
                className="font-title font-extrabold text-light leading-[1.2] mb-4"
                style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}
              >
                Muitos trabalhadores perdem direitos por não buscar ajuda
              </h2>
              <p className="text-muted leading-[1.8]">
                A legislação trabalhista brasileira protege você em diversas situações.
                Se você se identifica com algum dos cenários abaixo, pode ter direito a indenização.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {alertas.map((alerta) => (
                <div
                  key={alerta}
                  className="flex gap-3 items-start px-4 py-3.5 border border-muted/10 bg-deepnavy/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-muted">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-muted text-[0.88rem] leading-normal">{alerta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-6 bg-deepnavy">
        <div className="max-w-300 mx-auto">
          <div className="mb-16">
            <span className="section-label">Serviços</span>
            <h2 className="section-title">Nossas atuações trabalhistas</h2>
            <div className="divider" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="service-card px-8 py-10 border border-muted/10 bg-navy/10"
              >
                <div className="text-muted mb-5">{s.icon}</div>
                <h3 className="font-title text-[1.15rem] font-bold text-light mb-3">{s.title}</h3>
                <p className="text-muted text-[0.9rem] leading-[1.8] mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-1.5 list-none">
                  {s.itens.map((item) => (
                    <li key={item} className="text-muted/80 text-[0.82rem] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-navy text-center">
        <div className="max-w-170 mx-auto">
          <span className="section-label">Pronto para agir?</span>
          <h2 className="section-title">Seus direitos trabalhistas têm prazo</h2>
          <p className="text-muted mb-10 leading-[1.8]">
            A prescrição trabalhista é de 2 anos após a demissão e 5 anos durante o contrato.
            Não espere o prazo vencer — quanto antes agir, mais você pode recuperar.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/5511998320101?text=Olá,%20tenho%20uma%20questão%20trabalhista%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WaIcon size={18} />
              Falar Agora pelo WhatsApp
            </a>
            <a href="/#contato" className="btn-outline">Formulário de Contato</a>
          </div>
        </div>
      </section>
    </>
  );
}
