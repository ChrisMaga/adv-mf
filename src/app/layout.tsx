import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import {
  SITE_URL,
  SITE_NAME,
  PHONE_NUMBER,
  EMAIL_CONTATO,
  ENDERECO,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/site";

const DESCRICAO =
  "Advogados em Santo André: aposentadoria e INSS, direitos do trabalhador, isenção de IR por doença grave e direitos PcD, autismo e TDAH. Atendimento presencial no Grande ABC e online em todo o estado de SP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Advogado Previdenciário e Trabalhista em Santo André | Macedo Faria Advogados",
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRICAO,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRICAO,
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071720",
};

// Dados estruturados para o Google (aparece em buscas locais e no Maps)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  logo: `${SITE_URL}/logo-mf.png`,
  telephone: PHONE_NUMBER,
  email: EMAIL_CONTATO,
  address: {
    "@type": "PostalAddress",
    streetAddress: ENDERECO.rua,
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.uf,
    addressCountry: "BR",
  },
  areaServed: ["Santo André", "São Bernardo do Campo", "São Caetano do Sul", "Grande ABC", "São Paulo"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  knowsAbout: ["Direito Previdenciário", "Direito do Trabalho", "Isenção de Imposto de Renda", "Direitos da Pessoa com Deficiência"],
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
