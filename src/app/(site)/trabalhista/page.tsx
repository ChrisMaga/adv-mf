import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "Advogado Trabalhista em Santo André | PPP, Insalubridade e Rescisão",
  description:
    "PPP errado, insalubridade, horas extras, FGTS, rescisão atrasada, acidente de trabalho e assédio. Advogado trabalhista em Santo André e online em todo o estado de SP.",
  alternates: { canonical: "/trabalhista" },
  openGraph: { url: "/trabalhista" },
};

export default function Page() {
  return (
    <AreaPage
      slug="trabalhista"
      breadcrumb="Trabalhista"
      eyebrow="Direito do Trabalho · Santo André e Grande ABC"
      titulo="Advogado trabalhista em Santo André: PPP, insalubridade, rescisão e horas extras"
      intro="Saiu da empresa sem receber tudo? Trabalhou com ruído, calor ou produtos químicos e o PPP veio errado? Explicamos seus direitos de forma clara, presencialmente ou online em todo o estado de São Paulo."
      waTexto="Olá, gostaria de falar sobre um problema trabalhista."
      situacoesTitulo="O que aconteceu no seu trabalho?"
      situacoes={[
        { t: "PPP errado ou não entregue", d: "A empresa deve fornecer o PPP ao fim do contrato. Se ele omite agentes nocivos ou não foi entregue, isso pode afetar sua aposentadoria especial." },
        { t: "Insalubridade e periculosidade", d: "Adicionais para quem trabalha exposto a agentes nocivos, inflamáveis, explosivos ou eletricidade, quando não são pagos ou são pagos a menos." },
        { t: "Horas extras e banco de horas", d: "Jornada acima do combinado, intervalo de almoço reduzido ou banco de horas sem compensação correta." },
        { t: "Rescisão atrasada ou incompleta", d: "As verbas rescisórias devem ser pagas em até 10 dias após o fim do contrato. Atraso ou valores faltando podem gerar direito a multa." },
        { t: "FGTS não depositado", d: "Pelo app do FGTS você confere se os depósitos foram feitos mês a mês. Falhas podem ser cobradas da empresa." },
        { t: "Acidente e doença do trabalho", d: "Emissão da CAT, estabilidade após o afastamento, indenização e pensão quando o acidente ou a doença reduz a capacidade de trabalho." },
        { t: "Assédio moral no trabalho", d: "Humilhações, cobranças abusivas ou isolamento repetidos. Guardar mensagens e indicar testemunhas ajuda a comprovar." },
        { t: "Vínculo sem carteira assinada", d: "Trabalhou como empregado sem registro? O reconhecimento do vínculo garante direitos trabalhistas e conta tempo para a aposentadoria." },
      ]}
      destaque={{
        tipo: "texto",
        eyebrow: "Atenção ao prazo",
        titulo: "Saiu da empresa? Você tem até 2 anos para buscar seus direitos.",
        paragrafos: [
          "Depois do fim do contrato, o prazo para entrar com a ação trabalhista é de 2 anos. Dentro dele, é possível cobrar direitos dos últimos 5 anos de trabalho.",
          "Quanto mais tempo passa, mais períodos podem ficar de fora. Por isso vale buscar orientação logo após a saída.",
        ],
      }}
      documentos={[
        "Carteira de trabalho e contrato",
        "Holerites (contracheques)",
        "Termo de rescisão (TRCT) e extrato do FGTS",
        "Cartões de ponto ou registros de jornada",
        "PPP, atestados e CAT, se houver",
        "Mensagens, e-mails e nomes de possíveis testemunhas",
      ]}
      atendentes={[
        { foto: "/equipe/eduardo.jpg", nome: "Dr. Eduardo Macedo Faria", oab: "OAB/SP 293.029", texto: "Atua em Direito do Trabalho com atenção especial ao PPP e aos agentes nocivos, ligando o caso trabalhista à futura aposentadoria." },
      ]}
      faqTitulo="Perguntas sobre direitos trabalhistas"
      faqs={[
        { q: "A empresa é obrigada a me entregar o PPP?", a: "Sim. Quem trabalhou exposto a agentes nocivos tem direito a receber o PPP, em especial ao final do contrato. Se a empresa não entrega ou o documento vem com erros, é possível buscar a correção." },
        { q: "Qual é o prazo para a empresa pagar a rescisão?", a: "As verbas rescisórias devem ser pagas em até 10 dias contados do fim do contrato. O atraso pode gerar multa prevista na CLT." },
        { q: "Quanto tempo tenho para entrar com uma ação trabalhista?", a: "Até 2 anos depois do fim do contrato, podendo cobrar direitos dos últimos 5 anos. Depois desse prazo, o direito de ação se perde." },
        { q: "Sofri acidente no trabalho. Tenho estabilidade?", a: "Em regra, quem recebe auxílio-doença por acidente de trabalho tem estabilidade de 12 meses após a alta do INSS. Cada situação precisa ser analisada com os documentos." },
        { q: "Ainda estou empregado. Posso buscar orientação?", a: "Sim. A orientação é sigilosa e ajuda você a entender seus direitos e a guardar os documentos certos, sem precisar tomar nenhuma decisão imediata." },
      ]}
      ctaTitulo="Quer entender seus direitos no trabalho?"
    />
  );
}
