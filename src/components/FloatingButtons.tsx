"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { waLink } from "@/lib/site";

// Mensagem do WhatsApp de acordo com a página em que a pessoa está
const mensagens: Record<string, string> = {
  "/previdenciario": "Olá, gostaria de falar sobre aposentadoria ou INSS.",
  "/trabalhista": "Olá, gostaria de falar sobre um problema trabalhista.",
  "/isencoes-fiscais": "Olá, gostaria de falar sobre isenções e direitos PcD.",
};

export default function FloatingButtons() {
  const pathname = usePathname();
  const [mostrarTopo, setMostrarTopo] = useState(false);

  useEffect(() => {
    const onScroll = () => setMostrarTopo(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        tabIndex={mostrarTopo ? 0 : -1}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-ouro/60 bg-petroleo text-ouro shadow-[0_6px_20px_rgba(7,23,32,0.3)] transition-all duration-300 ${
          mostrarTopo ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={22} strokeWidth={2.4} />
      </button>
      <a
        href={waLink(mensagens[pathname])}
        target="_blank"
        rel="noopener"
        aria-label="Conversar pelo WhatsApp"
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-ouro text-noturno shadow-[0_6px_20px_rgba(7,23,32,0.35)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
