"use client";

import Link from "next/link";
import Image from "next/image";

const linkClass =
  "text-muted/70 text-[0.88rem] no-underline transition-colors duration-300 hover:text-light";

export default function Footer() {
  return (
    <footer className="bg-deepnavy border-t border-muted/10 pt-16 pb-8 px-6">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <Image src="/logomarca.png" alt="Logo" height={36} width={140} className="object-contain mb-4" />
            <p className="text-muted text-[0.85rem] leading-[1.8] max-w-70 mb-6">
              Escritório especializado em Direito Previdenciário, Trabalhista e Isenções Fiscais.
Atendimento em <span className="text-light font-bold">Santo André, São Bernardo, São Caetano e todo o Grande ABC/SP</span>.
            </p>            
          </div>

          {/* Navegação */}
          <div>
            <div className="font-title text-[10px] font-bold tracking-[2.5px] uppercase text-muted mb-5">
              Navegação
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/#hero" },
                { label: "Especialidades", href: "/#especialidades" },
                { label: "Diferenciais", href: "/#diferenciais" },
                { label: "Contato", href: "/#contato" },
              ].map((link) => (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Áreas */}
          <div>
            <div className="font-title text-[10px] font-bold tracking-[2.5px] uppercase text-muted mb-5">
              Áreas de Atuação
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Aposentadoria e INSS", href: "/previdenciario" },
                { label: "Benefício do INSS negado", href: "/previdenciario" },
                { label: "Aposentadoria Especial", href: "/previdenciario" },
                { label: "Revisões e Cálculos Previdenciários", href: "/previdenciario" },
                { label: "Direito Trabalhista", href: "/trabalhista" },
                { label: "Isenção de Imposto de Renda", href: "/previdenciario" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Atuação Local */}
          <div>
            <div className="font-title text-[10px] font-bold tracking-[2.5px] uppercase text-muted mb-5">
              Atuação Local
            </div>
            <nav className="flex flex-col gap-3">
              {[
                "Advogado Previdenciário Santo André",
                "Advogado Previdenciário São Bernardo",
                "Advogado Previdenciário São Caetano",
                "Advogado Trabalhista ABC/SP",
              ].map((label) => (
                <span key={label} className={linkClass}>
                  {label}
                </span>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <div className="font-title text-[10px] font-bold tracking-[2.5px] uppercase text-muted mb-5">
              Contato
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+5511998320101" className={linkClass}>
                (11) 99832-0101
              </a>
              <a href="mailto:mf.eduardo@gmail.com" className={linkClass}>
                mf.eduardo@gmail.com
              </a>
              <span className="text-muted/70 text-[0.88rem] leading-[1.6]">
                Santo André – SP (Jardim Bela Vista) • Região do Grande ABC
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-muted/8 pt-7 flex justify-between items-center flex-wrap gap-4">
          <span className="text-muted/40 text-xs font-title tracking-[1px]">
            © 2026 Macedo Faria Advogados — Especialistas em Previdenciário e Trabalhista no Grande ABC/SP.
          </span>
          <span className="text-muted/40 text-xs font-title tracking-[1px]">
            OAB/SP - 293.029
          </span>
        </div>
      </div>
    </footer>
  );
}
