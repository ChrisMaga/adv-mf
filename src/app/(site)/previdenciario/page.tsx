import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "Advogado Previdenciário em Santo André | Aposentadoria e INSS",
  description:
    "INSS negou seu benefício? Aposentadoria especial, auxílio-doença, perícia, BPC/LOAS, pensão por morte e revisão. Advogado previdenciário em Santo André e online em SP.",
  alternates: { canonical: "/previdenciario" },
  openGraph: { url: "/previdenciario" },
};

export default function Page() {
  return (
    <AreaPage
      slug="previdenciario"
      breadcrumb="Previdenciário"
      eyebrow="Direito Previdenciário · Santo André e Grande ABC"
      titulo="Advogado previdenciário em Santo André: aposentadoria, auxílio-doença e INSS"
      intro="Pediu um benefício e o INSS negou? Quer saber quando pode se aposentar ou se está recebendo o valor certo? Explicamos suas opções em linguagem simples, presencialmente ou online em todo o estado de São Paulo."
      waTexto="Olá, gostaria de falar sobre aposentadoria ou INSS."
      situacoesTitulo="Qual é a sua dúvida com o INSS?"
      situacoes={[
        { t: "Aposentadoria especial", d: "Para quem trabalhou exposto a ruído, calor, poeira, eletricidade ou produtos químicos. O tempo especial depende do PPP e do LTCAT corretos." },
        { t: "Aposentadoria por idade e por tempo de contribuição", d: "Depois da Reforma da Previdência de 2019 existem regras de transição. Comparamos as opções para você entender qual se aplica ao seu caso." },
        { t: "Auxílio-doença negado ou cortado", d: "Quando a perícia do INSS não reconhece a incapacidade, ou o benefício é encerrado antes de você ter condições de voltar ao trabalho." },
        { t: "Aposentadoria por invalidez", d: "Hoje chamada de aposentadoria por incapacidade permanente, para quem não tem condições de voltar a trabalhar em nenhuma atividade." },
        { t: "Pensão por morte", d: "Para cônjuge, companheiro(a), filhos e outros dependentes de quem faleceu. Orientamos sobre quem tem direito e por quanto tempo." },
        { t: "BPC/LOAS", d: "Benefício assistencial de um salário mínimo para idosos a partir de 65 anos ou pessoas com deficiência em situação de baixa renda, mesmo sem contribuição ao INSS." },
        { t: "Revisão de benefício", d: "Quando o valor parece baixo: períodos que ficaram de fora do CNIS, tempo especial não contado ou erro no cálculo." },
        { t: "Planejamento de aposentadoria", d: "Para quem ainda está trabalhando e quer saber quando e como se aposentar, conferindo o CNIS antes de fazer o pedido." },
      ]}
      destaque={{
        tipo: "passos",
        eyebrow: "INSS negou o pedido?",
        titulo: "Uma negativa nem sempre é o fim do caminho",
        passos: [
          { t: "Leia o motivo da negativa", d: "A carta de indeferimento, disponível no Meu INSS, diz por que o pedido foi negado. Ela orienta o próximo passo." },
          { t: "Fique atento ao prazo de recurso", d: "Em regra, o recurso administrativo deve ser feito em até 30 dias depois que você toma ciência da decisão." },
          { t: "Avalie o caminho judicial", d: "Em alguns casos, a ação na Justiça Federal é a via mais adequada. Cada situação precisa de análise individual." },
        ],
      }}
      documentos={[
        "RG, CPF e comprovante de endereço",
        "Carteiras de trabalho (todas, inclusive as antigas)",
        "Extrato do CNIS, baixado no app Meu INSS",
        "PPP e LTCAT, se trabalhou com agentes nocivos",
        "Laudos, exames e atestados médicos",
        "Carta de indeferimento do INSS, se houver",
      ]}
      atendentes={[
        { foto: "/equipe/eduardo.jpg", nome: "Dr. Eduardo Macedo Faria", oab: "OAB/SP 293.029", texto: "Atua em Direito Previdenciário com foco em aposentadoria especial e na análise do PPP." },
      ]}
      faqTitulo="Perguntas sobre aposentadoria e INSS"
      faqs={[
        { q: "Ainda dá para ter aposentadoria especial depois da Reforma de 2019?", a: "Sim. A aposentadoria especial continua existindo, mas com novas regras, como idade mínima para quem começou a contribuir depois da Reforma. Já a conversão de tempo especial em tempo comum só vale para períodos trabalhados até 13/11/2019." },
        { q: "A perícia negou meu auxílio-doença. O que posso fazer?", a: "É possível pedir recurso ou fazer um novo requerimento com laudos atualizados e, em alguns casos, entrar com ação judicial. O caminho certo depende do motivo da negativa e dos documentos médicos." },
        { q: "Preciso ter contribuído com o INSS para receber o BPC/LOAS?", a: "Não. O BPC é um benefício assistencial. Os requisitos são idade a partir de 65 anos ou deficiência de longo prazo, além da renda familiar dentro do limite previsto em lei, com inscrição no CadÚnico." },
        { q: "Existe prazo para pedir revisão da aposentadoria?", a: "Em regra, o prazo para pedir a revisão é de 10 anos, contados a partir do mês seguinte ao primeiro pagamento. Há exceções, por isso cada caso precisa ser analisado." },
        { q: "Posso ser atendido sem sair de casa?", a: "Sim. Atendemos online, por videochamada e WhatsApp, em todo o estado de São Paulo. Os documentos podem ser enviados digitalmente." },
      ]}
      ctaTitulo="Quer entender a sua situação com o INSS?"
    />
  );
}
