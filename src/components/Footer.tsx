"use client";

import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { OPEN_EVENT } from "@/components/CookieConsent";
import { AREAS, AVISO_OAB, CREDITO_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-rodape text-prata">
      <div className="container-site flex flex-col gap-7 pb-8 pt-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" aria-label="Macedo Faria Advogados — página inicial">
            <Image src="/logo-mf.png" alt="Macedo Faria Advogados" width={650} height={443} className="h-11 w-auto" />
          </Link>
          <nav aria-label="Rodapé" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {AREAS.map((a) => (
              <Link key={a.href} href={a.href} className="py-2 text-suave hover:text-ouro">
                {a.label}
              </Link>
            ))}
            <div className="flex gap-2.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Instagram @macedofaria.adv"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ouro/50 text-ouro hover:bg-ouro/10"
              >
                <InstagramIcon />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener"
                aria-label="Facebook Macedo Faria Advogados"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ouro/50 text-ouro hover:bg-ouro/10"
              >
                <FacebookIcon />
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-prata/25 pt-6 text-[13px]">
          <span>© {new Date().getFullYear()} Macedo Faria Advogados · OAB/SP 293.029 · OAB/SP 323.082</span>
          <span>{AVISO_OAB}</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacidade" className="text-suave hover:text-ouro">
              Política de Privacidade
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
              className="cursor-pointer bg-transparent p-0 text-suave underline hover:text-ouro"
            >
              Preferências de cookies
            </button>
          </span>
          <span>
            Site por{" "}
            <a href={CREDITO_URL} target="_blank" rel="noopener" className="text-ouro">
              CM Digital
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
