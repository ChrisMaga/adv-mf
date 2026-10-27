"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export type Pergunta = { q: string; a: string };

/** Acordeão de dúvidas. Também gera o FAQPage em JSON-LD para o Google. */
export default function Faq({ itens, borda = "#D3D7DD" }: { itens: Pergunta[]; borda?: string }) {
  const [aberto, setAberto] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <div className="flex flex-col border-t" style={{ borderColor: borda }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {itens.map((item, i) => {
        const open = aberto === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q} className="border-b" style={{ borderColor: borda }}>
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setAberto(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={id}
                className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-[22px] text-left font-title text-lg font-bold text-noturno"
              >
                <span>{item.q}</span>
                {open ? (
                  <Minus aria-hidden="true" size={22} strokeWidth={2.4} className="shrink-0 text-petroleo" />
                ) : (
                  <Plus aria-hidden="true" size={22} strokeWidth={2.4} className="shrink-0 text-petroleo" />
                )}
              </button>
            </h3>
            <div id={id} hidden={!open}>
              <p className="mb-[22px] mt-0 max-w-[720px] text-base text-texto">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
