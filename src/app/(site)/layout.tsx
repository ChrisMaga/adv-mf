import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-ouro focus:px-4 focus:py-2 focus:text-noturno"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
