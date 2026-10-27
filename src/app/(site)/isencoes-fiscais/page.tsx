import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "Isenção de IR por Doença Grave e Direitos PcD, Autismo e TDAH | Santo André",
  description:
    "Isenção de Imposto de Renda por doença grave, restituição, carro PcD (IPI e IPVA), direitos com laudo de autismo e TDAH, escola e plano de saúde. Atendimento em Santo André e online em SP.",
  alternates: { canonical: "/isencoes-fiscais" },
  openGraph: { url: "/isencoes-fiscais" },
};

export default function Page() {
  return (
    <AreaPage
      slug="isencoes-fiscais"
      breadcrumb="Isenções e direitos PcD"
      eyebrow="Isenções e direitos PcD, TEA e TDAH · Santo André e Grande ABC"
      titulo="Isenção de Imposto de Renda por doença grave e direitos para PcD, autismo e TDAH"
      intro="Aposentado com doença grave pagando IR? Família com laudo de autismo ou TDAH sem saber por onde começar? Explicamos quais direitos podem existir no seu caso, presencialmente ou online em todo o estado de São Paulo."
      waTexto="Olá, gostaria de falar sobre isenções e direitos PcD."
      situacoesTitulo="Que direito você quer entender?"
      situacoes={[
        { t: "Isenção de IR por doença grave", d: "Aposentados e pensionistas com doenças previstas em lei, como câncer, cardiopatia grave, Parkinson e cegueira, inclusive monocular, podem ter isenção sobre esses rendimentos." },
        { t: "Restituição do IR pago", d: "Quem já tinha a doença e continuou pagando imposto pode pedir de volta o que foi pago, em regra nos últimos 5 anos." },
        { t: "Carro PcD: IPI, IOF e IPVA", d: "Pessoas com deficiência e pessoas com autismo podem ter isenções na compra do veículo. No IPVA, cada estado tem regras próprias, e São Paulo exige requisitos específicos." },
        { t: "Direitos com laudo de autismo (TEA)", d: "A pessoa com autismo é considerada pessoa com deficiência para todos os efeitos legais, o que garante atendimento prioritário, a CIPTEA e outros direitos." },
        { t: "TDAH e dislexia na escola", d: "A lei garante acompanhamento integral aos estudantes com TDAH ou dislexia, com apoio da escola e articulação com a área da saúde." },
        { t: "Escola cobrando a mais", d: "Escolas particulares não podem cobrar valor adicional pela matrícula ou pela mensalidade de alunos com deficiência, nem recusar a matrícula por esse motivo." },
        { t: "Plano de saúde negando terapias", d: "Desde 2022, regras da ANS acabaram com o limite de sessões de terapias como fonoaudiologia, psicologia e terapia ocupacional, e ampliaram a cobertura para pessoas com autismo." },
        { t: "BPC/LOAS para pessoa com deficiência", d: "Benefício de um salário mínimo para pessoas com deficiência de longo prazo, inclusive crianças, em famílias de baixa renda." },
      ]}
      destaque={{
        tipo: "texto",
        eyebrow: "Aposentado com doença grave?",
        titulo: "O Imposto de Renda sobre a sua aposentadoria pode ser isento.",
        paragrafos: [
          "A isenção vale para os proventos de aposentadoria, reforma ou pensão de quem tem uma das doenças listadas na lei. Não importa se a doença apareceu antes ou depois de se aposentar.",
          "O pedido depende de laudo médico. Quando a isenção não é reconhecida pela fonte pagadora ou pela Receita, é possível buscar o direito na Justiça.",
        ],
      }}
      documentos={[
        "Laudo médico com CID e data do diagnóstico",
        "Exames e relatórios médicos ou terapêuticos",
        "Carta de concessão da aposentadoria ou pensão",
        "Declarações de Imposto de Renda dos últimos anos",
        "Negativa do plano de saúde ou da escola, por escrito",
        "Documentos pessoais e comprovante de endereço",
      ]}
      atendentes={[
        { foto: "/equipe/eduardo.jpg", nome: "Dr. Eduardo Macedo Faria", oab: "OAB/SP 293.029", texto: "Isenções de impostos e direitos PcD, TEA e TDAH." },
        { foto: "/equipe/maria-luiza.jpg", nome: "Dra. Maria Luiza Macedo Faria", oab: "OAB/SP 323.082", texto: "Ações contra planos de saúde, incluindo negativa de terapias." },
      ]}
      faqTitulo="Perguntas sobre isenções e direitos PcD"
      faqs={[
        { q: "Quem tem direito à isenção de IR por doença grave?", a: "Aposentados, pensionistas e militares reformados com uma das doenças listadas na lei, como câncer, cardiopatia grave, doença de Parkinson, esclerose múltipla e cegueira. A isenção vale sobre esses proventos, não sobre salário de quem ainda trabalha." },
        { q: "Já paguei imposto mesmo tendo a doença. Posso receber de volta?", a: "Em regra, é possível pedir a restituição do que foi pago nos últimos 5 anos, desde que a doença já existisse no período. O laudo com a data do diagnóstico é importante." },
        { q: "Autismo dá direito a isenção na compra do carro?", a: "A lei federal prevê isenção de IPI para pessoas com autismo na compra de veículo, mesmo que outra pessoa dirija. O IPVA segue regras de cada estado. Cada caso depende do laudo e da documentação." },
        { q: "O plano de saúde limitou as sessões de terapia. Isso é permitido?", a: "Desde 2022, as regras da ANS acabaram com o limite de sessões de psicologia, fonoaudiologia e terapia ocupacional. Uma negativa ou limitação pode ser questionada. Peça sempre a negativa por escrito." },
        { q: "Meu filho tem TDAH. Ele tem algum direito na escola?", a: "Sim. A Lei 14.254/2021 garante acompanhamento integral a estudantes com TDAH ou dislexia, com apoio da escola e acompanhamento da área da saúde quando necessário." },
      ]}
      ctaTitulo="Quer saber quais direitos se aplicam à sua família?"
    />
  );
}
