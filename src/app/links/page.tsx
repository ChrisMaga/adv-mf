import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, ChevronRight, Globe, HeartHandshake, Landmark, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import {
  AVISO_OAB,
  CREDITO_URL,
  EMAIL_CONTATO,
  ENDERECO,
  FACEBOOK_URL,
  HORARIO,
  INSTAGRAM_URL,
  MAPS_URL,
  OABS,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Links",
  description: "Links rápidos do Macedo Faria Advogados: WhatsApp, áreas de atuação, endereço e contato.",
  alternates: { canonical: "/links" },
  robots: { index: false, follow: true },
};

// Marca as visitas que vêm da bio do Instagram no Google Analytics
const utm = "?utm_source=instagram&utm_medium=bio&utm_campaign=links";

const areas = [
  { href: `/previdenciario${utm}`, icon: Landmark, t: "Aposentadoria e INSS", d: "INSS negou, perícia, aposentadoria especial, BPC" },
  { href: `/trabalhista${utm}`, icon: Briefcase, t: "Direitos do trabalhador", d: "PPP, insalubridade, rescisão, horas extras" },
  { href: `/isencoes-fiscais${utm}`, icon: HeartHandshake, t: "Isenções e direitos PcD, TEA e TDAH", d: "IR por doença grave, carro PcD, plano de saúde" },
];

const linkSec =
  "flex min-h-[52px] items-center gap-3.5 rounded-[10px] border border-[#3A4E5C] px-[18px] py-3.5 text-gelo no-underline hover:border-ouro/60";

export default function Links() {
  return (
    <main className="min-h-screen bg-noturno px-5 pb-8 pt-10 text-gelo">
      <div className="mx-auto flex max-w-[460px] flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <Image src="/logo-mf.png" alt="Macedo Faria Advogados" width={650} height={443} priority className="h-16 w-auto" />
          <h1 className="sr-only">Macedo Faria Advogados</h1>
          <p className="m-0 max-w-[340px] text-[15px] text-suave">Previdenciário · Trabalhista · Isenções e direitos PcD, TEA e TDAH</p>
          <p className="m-0 text-[13px] text-prata">Santo André e online em todo o estado de SP</p>
        </div>

        <nav aria-label="Links" className="flex w-full flex-col gap-3">
          <a
            href={waLink("Olá, vim pelo Instagram e gostaria de agendar um atendimento.")}
            target="_blank"
            rel="noopener"
            className="flex min-h-[60px] items-center gap-3.5 rounded-[10px] bg-ouro px-[18px] py-4 text-noturno no-underline"
          >
            <WhatsAppIcon size={24} className="shrink-0" />
            <span className="flex flex-col">
              <span className="font-title text-base font-bold">Agendar pelo WhatsApp</span>
              <span className="text-[13px]">Fale com a nossa secretária</span>
            </span>
          </a>

          <p className="eyebrow mb-0 mt-2.5 text-xs text-ouro">Será que é o seu caso?</p>
          {areas.map(({ icon: Icon, ...a }) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex min-h-[60px] items-center gap-3.5 rounded-[10px] border border-ouro/35 bg-petroleo px-[18px] py-4 text-gelo no-underline hover:border-ouro"
            >
              <Icon aria-hidden="true" size={24} className="shrink-0 text-ouro" />
              <span className="flex flex-1 flex-col">
                <span className="font-title text-base font-bold">{a.t}</span>
                <span className="text-[13px] text-suave">{a.d}</span>
              </span>
              <ChevronRight aria-hidden="true" size={18} className="shrink-0 text-prata" />
            </Link>
          ))}

          <p className="eyebrow mb-0 mt-2.5 text-xs text-ouro">Escritório</p>
          <Link href={`/${utm}`} className={linkSec}>
            <Globe aria-hidden="true" size={22} className="shrink-0 text-ouro" />
            <span className="font-title text-[15px] font-semibold">Conheça o escritório e a equipe</span>
          </Link>
          <a href={MAPS_URL} target="_blank" rel="noopener" className={linkSec}>
            <MapPin aria-hidden="true" size={22} className="shrink-0 text-ouro" />
            <span className="flex flex-col">
              <span className="font-title text-[15px] font-semibold">Como chegar</span>
              <span className="text-[13px] text-suave">
                {ENDERECO.rua} · {ENDERECO.cidade}
              </span>
            </span>
          </a>
          <a href={`mailto:${EMAIL_CONTATO}`} className={linkSec}>
            <Mail aria-hidden="true" size={22} className="shrink-0 text-ouro" />
            <span className="flex flex-col">
              <span className="font-title text-[15px] font-semibold">Enviar e-mail</span>
              <span className="text-[13px] text-suave">{EMAIL_CONTATO}</span>
            </span>
          </a>
        </nav>

        <div className="flex gap-3">
          {[
            { href: INSTAGRAM_URL, label: "Instagram @macedofaria.adv", Icon: InstagramIcon },
            { href: FACEBOOK_URL, label: "Facebook Macedo Faria Advogados", Icon: FacebookIcon },
            { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp", Icon: WhatsAppIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ouro/50 text-ouro"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center text-xs text-prata">
          <span>{HORARIO}</span>
          <span>{OABS}</span>
          <span>{AVISO_OAB}</span>
          <Link href="/privacidade" className="mt-1.5 text-suave">
            Política de Privacidade
          </Link>
          <span>
            Site por{" "}
            <a href={CREDITO_URL} target="_blank" rel="noopener" className="text-ouro">
              CM Digital
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
