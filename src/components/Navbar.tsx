"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type NavChild = { label: string; href: string; desc: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/#hero" },
  { label: "Áreas de Atuação", href: "/#especialidades" },
  {
    label: "Especialidades",
    href: "/#especialidades",
    children: [
      { label: "Previdenciário", href: "/previdenciario", desc: "INSS, aposentadorias, benefícios" },
      { label: "Trabalhista", href: "/trabalhista", desc: "Rescisões, horas extras, FGTS" },
    ],
  },
  
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Por que nos escolher", href: "/#escolher" },
  { label: "Contato", href: "/#contato" },
];

const WA_HREF =
  "https://wa.me/5511998320101?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20Dr%20Eduardo.";

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileSubOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ${
          scrolled
            ? "py-3.5 bg-deepnavy/97 backdrop-blur-md border-b border-muted/10"
            : "py-1 bg-deepnavy border-b border-transparent"
        }`}
      >
        <div className="max-w-450 mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="no-underline">
            <Image src="/logomarca.png" alt="Logo" height={40} width={150} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-[961px]:flex gap-9 items-center">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropRef}
                >
                  <button
                    onClick={() => setDropOpen(!dropOpen)}
                    className="flex items-center gap-1.5 font-title text-xs font-semibold tracking-[1.5px] uppercase text-muted transition-colors duration-300 hover:text-light bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.label}
                    <ChevronDown open={dropOpen} />
                  </button>

                  {dropOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-deepnavy border border-muted/15 shadow-2xl z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropOpen(false)}
                          className="flex flex-col px-5 py-4 no-underline hover:bg-navy/50 transition-colors duration-200 border-b border-muted/10 last:border-b-0"
                        >
                          <span className="font-title text-[11px] font-bold tracking-[1.5px] uppercase text-light">
                            {child.label}
                          </span>
                          <span className="text-[11px] text-muted mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-title text-xs font-semibold tracking-[1.5px] uppercase text-muted transition-colors duration-300 hover:text-light no-underline"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-[11px]! px-5.5! py-2.5! rounded-md"
            >
              <WaIcon />
              WhatsApp
            </a>
          </nav>

          {/* Mobile WhatsApp + hamburger */}
          <div className="min-[961px]:hidden flex items-center gap-8">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-[11px]! px-4! py-2! rounded-md"
            >
              <WaIcon />
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.25 p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
            >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 bg-light transition-all duration-300"
                style={{
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-deepnavy z-99 flex flex-col items-center justify-center gap-8 overflow-y-auto py-10">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col items-center">
                <button
                  onClick={() => setMobileSubOpen(!mobileSubOpen)}
                  className="flex items-center gap-2.5 font-title text-[20px] font-bold tracking-[2px] uppercase text-light bg-transparent border-none cursor-pointer p-0"
                >
                  {link.label}
                  <ChevronDown open={mobileSubOpen} />
                </button>

                {mobileSubOpen && (
                  <div className="flex flex-col items-center gap-0 mt-5 pt-5 border-t border-muted/15 w-56">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobile}
                        className="w-full flex flex-col items-center py-3.5 no-underline border-b border-muted/10 last:border-b-0"
                      >
                        <span className="font-title text-[13px] font-bold tracking-[1.5px] uppercase text-light">
                          {child.label}
                        </span>
                        <span className="text-[11px] text-muted mt-0.5">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="font-title text-[20px] font-bold tracking-[2px] uppercase text-light no-underline"
              >
                {link.label}
              </a>
            )
          )}          
        </div>
      )}
    </>
  );
}
