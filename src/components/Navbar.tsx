"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { waLink } from "@/lib/site";

const links = [
  { href: "/previdenciario", label: "Previdenciário" },
  { href: "/trabalhista", label: "Trabalhista" },
  { href: "/isencoes-fiscais", label: "Isenções e PcD" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  // Fecha o menu do celular ao trocar de página
  useEffect(() => setAberto(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ouro/25 bg-noturno">
      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Macedo Faria Advogados — página inicial">
          <Image src="/logo-mf.png" alt="Macedo Faria Advogados" width={650} height={443} priority className="h-12 w-auto" />
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-7 font-title text-sm font-semibold lg:flex">
          {links.map((l) => {
            const ativo = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={ativo ? "page" : undefined}
                className={`py-2.5 no-underline transition-colors ${
                  ativo ? "border-b-2 border-ouro text-ouro" : "text-gelo hover:text-ouro"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a href={waLink()} className="btn-ouro !px-5 !py-3 !text-sm" target="_blank" rel="noopener">
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-gelo lg:hidden"
        >
          {aberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {aberto && (
        <nav id="menu-celular" aria-label="Menu principal" className="border-t border-white/10 bg-noturno lg:hidden">
          <div className="container-site flex flex-col py-3 font-title text-base font-semibold">
            <Link href="/" className="py-3 text-gelo no-underline">
              Início
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3 text-gelo no-underline">
                {l.label}
              </Link>
            ))}
            <a href={waLink()} className="btn-ouro my-3" target="_blank" rel="noopener">
              <WhatsAppIcon size={18} />
              Conversar pelo WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
