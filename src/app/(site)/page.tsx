import Link from "next/link";
import Image from "next/image";
import { AlignLeft, Briefcase, Check, Clock, HeartHandshake, Landmark, MapPin, Monitor } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import { EMAIL_EDUARDO, HORARIO, waLink } from "@/lib/site";

const sinais = [
  "O INSS negou meu benefício ou a perícia",
  "Trabalhei com ruído, calor ou produtos químicos",
  "Meu PPP está errado ou a empresa não entregou",
  "Saí da empresa e a rescisão veio incompleta",
  "Tenho (ou meu filho tem) laudo de autismo, TDAH ou deficiência",
];

const areas = [
  {
    icon: Landmark,
    titulo: "Aposentadoria e INSS",
    texto: "Para quem quer se aposentar, teve um benefício negado ou acha que recebe menos do que deveria.",
    itens: ["Aposentadoria especial e por tempo de contribuição", "Auxílio-doença negado ou cortado", "Perícia do INSS", "Pensão por morte", "BPC/LOAS", "Revisão de benefício"],
    href: "/previdenciario",
    cta: "Saiba mais sobre Previdenciário",
  },
  {
    icon: Briefcase,
    titulo: "Direitos do trabalhador",
    texto: "Para quem trabalhou em condições de risco, saiu da empresa sem receber tudo ou sofreu algum problema no trabalho.",
    itens: ["PPP errado ou não entregue", "Insalubridade e periculosidade", "Horas extras e FGTS", "Rescisão atrasada ou incompleta", "Acidente e doença do trabalho", "Assédio no trabalho"],
    href: "/trabalhista",
    cta: "Saiba mais sobre Trabalhista",
  },
  {
    icon: HeartHandshake,
    titulo: "Isenções e direitos PcD, TEA e TDAH",
    texto: "Para pessoas com deficiência, doenças graves e famílias de crianças com autismo ou TDAH.",
    itens: ["Isenção de Imposto de Renda por doença grave", "Isenção de IPVA e IPI para carro PcD", "Direitos com laudo de autismo e TDAH", "CIPTEA e direitos na escola", "Plano de saúde que nega terapias"],
    href: "/isencoes-fiscais",
    cta: "Saiba mais sobre Isenções",
  },
];

const passos = [
  { t: "Você conta o que aconteceu", d: "Pelo WhatsApp, por telefone ou no escritório. Sem formulários complicados." },
  { t: "Analisamos seus documentos", d: "CNIS, carteira de trabalho, PPP, laudos médicos: dizemos exatamente o que separar." },
  { t: "Explicamos os caminhos", d: "Você entende as opções, os prazos e os riscos de cada uma antes de decidir." },
  { t: "Acompanhamos o seu caso", d: "Você recebe atualizações sobre cada etapa, sem precisar ficar perguntando." },
];

const faqs = [
  { q: "Preciso ir ao escritório para ser atendido?", a: "Não. Atendemos presencialmente em Santo André e também online, por videochamada e WhatsApp, para todo o estado de São Paulo." },
  { q: "Quais documentos devo separar?", a: "Depende do assunto. Em geral: documento com foto, carteira de trabalho, extrato do CNIS (Meu INSS), PPP e laudos médicos, quando houver. No primeiro contato dizemos exatamente o que é necessário no seu caso." },
  { q: "O INSS negou meu pedido. Ainda dá para fazer alguma coisa?", a: "Muitas vezes, sim: há recurso administrativo e, em alguns casos, ação judicial. Os prazos variam conforme a situação, por isso vale buscar orientação assim que receber a decisão." },
  { q: "Tenho laudo de autismo ou TDAH. Que direitos posso ter?", a: "Podem existir direitos ligados a isenções de impostos, à escola, ao plano de saúde e a benefícios. Cada caso depende do laudo e da situação da família, e a análise é individual." },
  { q: "Como funciona o atendimento pelo WhatsApp?", a: "Você envia uma mensagem contando brevemente sua situação e combinamos o melhor horário para conversar, presencialmente ou online." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-noturno text-gelo">
        <div className="container-site grid grid-cols-1 items-center gap-14 pb-24 pt-16 lg:grid-cols-2 lg:pt-20">
          <div className="flex flex-col gap-6">
            <p className="eyebrow m-0 text-ouro">Advocacia em Santo André e Grande ABC</p>
            <h1 className="m-0 font-title font-extrabold leading-[1.08] tracking-[-0.01em]" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
              O INSS negou, atrasou ou pagou menos? Entenda seus direitos.
            </h1>
            <p className="m-0 max-w-[540px] text-lg text-suave">
              Aposentadoria, auxílio-doença, direitos do trabalhador e isenções para PcD, autismo e TDAH. Explicamos cada passo
              em linguagem simples, presencialmente em Santo André ou online em todo o estado de São Paulo.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener" className="btn-ouro">
                <WhatsAppIcon />
                Conversar pelo WhatsApp
              </a>
              <a href="#contato" className="btn-contorno">
                Agendar atendimento
              </a>
            </div>
            <p className="mt-2 text-[13px] text-prata">Dr. Eduardo Macedo Faria · OAB/SP 293.029</p>
          </div>

          <div className="flex flex-col gap-5 rounded-xl border border-ouro/35 bg-petroleo p-7 sm:p-9">
            <p className="m-0 font-title text-2xl font-bold">Será que é o seu caso?</p>
            <p className="m-0 text-[15px] text-suave">Se você se identifica com alguma destas situações, vale conversar com um advogado:</p>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {sinais.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check aria-hidden="true" size={22} strokeWidth={2.4} className="mt-0.5 shrink-0 text-ouro" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <a href="#areas" className="py-2.5 font-title text-[15px] font-bold text-ouro no-underline">
              Ver as áreas de atuação ↓
            </a>
          </div>
        </div>
      </section>

      {/* FAIXA */}
      <section aria-label="Informações rápidas" className="bg-petroleo text-gelo">
        <div className="container-site grid grid-cols-1 gap-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, t: "Escritório em Santo André" },
            { icon: Monitor, t: "Atendimento online em todo o estado de SP" },
            { icon: AlignLeft, t: "Explicação clara, sem juridiquês" },
            { icon: Clock, t: HORARIO },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3.5 text-[15px]">
              <Icon aria-hidden="true" size={26} className="shrink-0 text-ouro" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="bg-gelo">
        <div className="container-site flex flex-col gap-12 py-24">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Áreas de atuação</p>
            <h2 className="h-section m-0">Encontre a sua situação</h2>
            <p className="m-0 text-[17px] text-texto">Cada área reúne os problemas que mais trazem pessoas ao escritório. Clique para ver mais detalhes.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, ...a }) => (
              <article key={a.href} className="flex flex-col gap-[18px] rounded-xl border-t-4 border-petroleo bg-white p-8">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-petroleo">
                  <Icon aria-hidden="true" size={26} className="text-ouro" />
                </div>
                <h3 className="m-0 font-title text-[22px] font-bold">{a.titulo}</h3>
                <p className="m-0 text-[15px] text-texto">{a.texto}</p>
                <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-[15px]">
                  {a.itens.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link href={a.href} className="mt-auto py-2.5 font-title text-[15px] font-bold text-petroleo">
                  {a.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PPP */}
      <section aria-label="Destaque PPP" className="bg-petroleo text-gelo">
        <div className="container-site grid grid-cols-1 items-center gap-10 py-[72px] lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="eyebrow m-0 text-ouro">Atenção ao PPP</p>
            <h2 className="m-0 font-title font-extrabold leading-[1.15]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              Um PPP com erro pode atrapalhar sua aposentadoria especial.
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[17px] text-claro">
            <p className="m-0">
              O Perfil Profissiográfico Previdenciário (PPP) é o documento que mostra ao INSS a que você foi exposto no trabalho.
              Quando ele vem incompleto, com agente nocivo faltando ou não é entregue, o tempo especial pode não ser reconhecido.
            </p>
            <p className="m-0">O Dr. Eduardo tem atuação voltada à análise e correção do PPP, unindo as áreas previdenciária e trabalhista.</p>
            <a href={waLink("Olá, gostaria de falar sobre meu PPP.")} target="_blank" rel="noopener" className="btn-ouro mt-2 self-start !text-[15px]">
              Tirar dúvidas sobre o meu PPP
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-white">
        <div className="container-site flex flex-col gap-12 py-24">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Como funciona</p>
            <h2 className="h-section m-0">Do primeiro contato ao acompanhamento</h2>
          </div>
          <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <li key={p.t} className="flex flex-col gap-3">
                <span aria-hidden="true" className="font-title text-[44px] font-extrabold leading-none text-numero">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-title text-[19px] font-bold">{p.t}</h3>
                <p className="m-0 text-[15px] text-texto">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-gelo">
        <div className="container-site flex flex-col gap-12 py-24">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Quem vai cuidar do seu caso</p>
            <h2 className="h-section m-0">Nossa equipe</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="flex flex-col overflow-hidden rounded-xl bg-white sm:flex-row">
              <Image src="/equipe/eduardo.jpg" alt="Dr. Eduardo Macedo Faria" width={800} height={800} className="h-80 w-full bg-petroleo object-cover object-[center_20%] sm:h-auto sm:w-[45%]" />
              <div className="flex flex-1 flex-col gap-2.5 p-8">
                <h3 className="m-0 font-title text-[22px] font-bold">Dr. Eduardo Macedo Faria</h3>
                <p className="m-0 text-sm font-semibold text-ouro-escuro">Sócio fundador · OAB/SP 293.029</p>
                <p className="m-0 text-[15px] text-texto">
                  Atua em Direito Previdenciário, Trabalhista e Isenções, com atenção especial à análise e correção do PPP para aposentadoria especial.
                </p>
                <a href={`mailto:${EMAIL_EDUARDO}`} className="py-2 text-sm text-petroleo">
                  {EMAIL_EDUARDO}
                </a>
              </div>
            </article>
            <article className="flex flex-col overflow-hidden rounded-xl bg-white sm:flex-row">
              <Image src="/equipe/maria-luiza.jpg" alt="Dra. Maria Luiza Macedo Faria" width={800} height={800} className="h-80 w-full bg-petroleo object-cover object-[center_20%] sm:h-auto sm:w-[45%]" />
              <div className="flex flex-1 flex-col gap-2.5 p-8">
                <h3 className="m-0 font-title text-[22px] font-bold">Dra. Maria Luiza Macedo Faria</h3>
                <p className="m-0 text-sm font-semibold text-ouro-escuro">Advogada sócia · OAB/SP 323.082</p>
                <p className="m-0 text-[15px] text-texto">Atua em inventário e herança, ações contra planos de saúde e Direito Imobiliário.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section id="duvidas" className="bg-white">
        <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-6 py-24">
          <div className="flex flex-col gap-3">
            <p className="eyebrow m-0 text-ouro-escuro">Dúvidas frequentes</p>
            <h2 className="h-section m-0">Antes de falar com a gente</h2>
          </div>
          <Faq itens={faqs} />
        </div>
      </section>

      <Contato />
    </>
  );
}
