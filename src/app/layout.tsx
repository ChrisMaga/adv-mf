import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Advocacia | Previdenciário e Trabalhista",
  description:
    "Escritório de advocacia especializado em Previdenciário e Trabalhista. Atendimento presencial e online em todo o estado de SP.",
  keywords: "advogado, advocacia, previdenciário, trabalhista, São Paulo",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
