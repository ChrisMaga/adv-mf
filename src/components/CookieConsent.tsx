"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "mf-cookies";
export const OPEN_EVENT = "mf:cookies:open";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Escolha = "aceito" | "recusado" | null;

function lerEscolha(): Escolha {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "aceito" || v === "recusado" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Aviso de cookies (LGPD). O Google Analytics só é carregado depois que a
 * pessoa clica em "Aceitar". Defina NEXT_PUBLIC_GA_ID (ex.: G-XXXXXXX) na
 * hospedagem para ativar a medição.
 */
export default function CookieConsent() {
  const [escolha, setEscolha] = useState<Escolha>(null);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const atual = lerEscolha();
    setEscolha(atual);
    setAberto(atual === null);
    const reabrir = () => setAberto(true);
    window.addEventListener(OPEN_EVENT, reabrir);
    return () => window.removeEventListener(OPEN_EVENT, reabrir);
  }, []);

  const salvar = (valor: Exclude<Escolha, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, valor);
    } catch {
      /* navegação privada: segue sem salvar */
    }
    // Se a pessoa recusou depois de ter aceitado, recarrega para descarregar o Analytics.
    const precisaRecarregar = escolha === "aceito" && valor === "recusado";
    setEscolha(valor);
    setAberto(false);
    if (precisaRecarregar) window.location.reload();
  };

  return (
    <>
      {GA_ID && escolha === "aceito" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {aberto && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 z-[60] flex w-[min(440px,calc(100%-112px))] flex-col gap-3 rounded-xl bg-white p-5 text-sm leading-normal text-noturno shadow-[0_10px_30px_rgba(7,23,32,0.3)]"
        >
          <p className="m-0">
            Usamos cookies para entender como o site é usado e melhorar sua experiência. Você pode aceitar ou
            recusar os cookies de análise.{" "}
            <Link href="/privacidade" className="text-petroleo underline">
              Saiba mais
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => salvar("aceito")}
              className="min-h-11 cursor-pointer rounded-md bg-petroleo px-[18px] py-2.5 font-title text-sm font-bold text-gelo"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => salvar("recusado")}
              className="min-h-11 cursor-pointer rounded-md border border-petroleo bg-transparent px-[18px] py-2.5 font-title text-sm font-bold text-petroleo"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
