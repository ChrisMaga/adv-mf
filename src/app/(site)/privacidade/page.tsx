import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL_CONTATO } from "@/lib/site";

// TODO: preencher com o dia em que o site novo for ao ar (ex.: "10 de novembro de 2026")
// e atualizar sempre que esta política mudar.
const ULTIMA_ATUALIZACAO = "27 de outubro de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Macedo Faria Advogados coleta, usa e protege seus dados pessoais, de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="m-0 font-title text-2xl font-bold">{titulo}</h2>
      {children}
    </section>
  );
}

const p = "m-0 text-texto";
const ul = "m-0 flex flex-col gap-2 pl-5 text-texto";
const Mail = () => <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>;

export default function Privacidade() {
  return (
    <>
      <section className="bg-noturno text-gelo">
        <div className="mx-auto flex max-w-[860px] flex-col gap-4 px-6 pb-16 pt-12">
          <nav aria-label="Você está em" className="text-[13px] text-prata">
            <Link href="/" className="text-prata">
              Início
            </Link>{" "}
            › <span className="text-gelo">Política de Privacidade</span>
          </nav>
          <h1 className="m-0 font-title font-extrabold leading-[1.1]" style={{ fontSize: "clamp(32px, 4.2vw, 48px)" }}>
            Política de Privacidade
          </h1>
          <p className="m-0 text-[17px] text-suave">
            Como o Macedo Faria Advogados coleta, usa e protege os seus dados pessoais, de acordo com a Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018).
          </p>
          <p className="m-0 text-sm text-prata">Última atualização: {ULTIMA_ATUALIZACAO}</p>
        </div>
      </section>

      <article className="mx-auto flex max-w-[860px] flex-col gap-10 px-6 pb-[88px] pt-16 leading-[1.7]">
        <section className="flex flex-col gap-2 rounded-xl bg-white px-7 py-6">
          <p className="m-0 font-title text-[17px] font-bold">Resumo em linguagem simples</p>
          <ul className="m-0 flex flex-col gap-1 pl-5 text-[15px] text-texto">
            <li>Usamos seus dados só para responder ao seu contato e atender o seu caso.</li>
            <li>Não vendemos nem cedemos seus dados para publicidade.</li>
            <li>Informações do seu caso são protegidas também pelo sigilo profissional do advogado.</li>
            <li>
              Você pode pedir acesso, correção ou exclusão dos seus dados pelo <Mail />.
            </li>
          </ul>
        </section>

        <Secao titulo="1. Quem é o responsável pelos seus dados">
          <p className={p}>
            O controlador dos dados é o escritório Macedo Faria Advogados, CNPJ 23.566.723/0001-58, com endereço na Rua do
            Bosque, 199, Jardim Bela Vista, Santo André – SP. Para qualquer assunto sobre seus dados pessoais, fale com a gente
            pelo e-mail <Mail />.
          </p>
        </Secao>

        <Secao titulo="2. Quais dados coletamos">
          <ul className={ul}>
            <li>
              <strong className="text-noturno">Dados que você nos envia:</strong> nome, e-mail, número de WhatsApp, assunto e a
              mensagem escrita no formulário de contato, além do que você compartilhar por WhatsApp, telefone ou e-mail.
            </li>
            <li>
              <strong className="text-noturno">Dados do atendimento:</strong> documentos e informações necessários para analisar e
              conduzir o seu caso, como documentos pessoais, CNIS, carteira de trabalho, PPP e laudos.
            </li>
            <li>
              <strong className="text-noturno">Dados de navegação:</strong> informações sobre como o site é usado, como páginas
              visitadas, tipo de dispositivo e de onde veio o acesso (por exemplo, do Instagram), coletadas por cookies de análise
              somente se você aceitar.
            </li>
          </ul>
        </Secao>

        <Secao titulo="3. Dados sensíveis, como informações de saúde">
          <p className={p}>
            Pela natureza das nossas áreas, como aposentadoria, auxílio-doença e direitos de pessoas com deficiência, autismo ou
            TDAH, você pode nos contar informações sobre saúde ou deficiência. Esses dados são sensíveis pela LGPD e são usados
            apenas para a análise e a defesa do seu caso, com acesso restrito à equipe que cuida dele.
          </p>
          <p className={p}>
            Recomendamos não enviar laudos ou documentos médicos pelo formulário do site. Quando forem necessários, vamos
            solicitá-los durante o atendimento.
          </p>
        </Secao>

        <Secao titulo="4. Para que usamos os dados">
          <ul className={ul}>
            <li>Responder ao seu contato e agendar o atendimento (procedimentos preliminares a um contrato, art. 7º, V, da LGPD).</li>
            <li>
              Prestar os serviços jurídicos contratados e atuar em processos administrativos e judiciais (execução de contrato e
              exercício regular de direitos, arts. 7º, V e VI, e 11, II, “d”).
            </li>
            <li>Cumprir obrigações legais e regulatórias, inclusive as da advocacia (art. 7º, II).</li>
            <li>Medir de forma estatística o uso do site, apenas com o seu consentimento (art. 7º, I).</li>
          </ul>
        </Secao>

        <Secao titulo="5. Com quem compartilhamos">
          <p className={p}>Não vendemos seus dados. Eles podem ser compartilhados somente quando necessário:</p>
          <ul className={ul}>
            <li>com órgãos públicos ligados ao seu caso, como INSS, Receita Federal e o Poder Judiciário;</li>
            <li>
              com fornecedores que nos ajudam a operar, como hospedagem do site, e-mail (Google Workspace), envio de e-mails do
              formulário, WhatsApp e ferramenta de estatísticas (Google Analytics), que tratam os dados de acordo com nossas
              instruções;
            </li>
            <li>com autoridades, quando houver obrigação legal ou ordem judicial.</li>
          </ul>
          <p className={p}>
            Alguns desses fornecedores podem armazenar dados em servidores fora do Brasil, sempre com as garantias previstas na
            LGPD.
          </p>
        </Secao>

        <Secao titulo="6. Por quanto tempo guardamos">
          <p className={p}>
            Contatos que não se tornam atendimento são guardados por até 12 meses e depois excluídos. Dados de clientes são
            mantidos durante a prestação do serviço e pelo tempo necessário para cumprir obrigações legais e resguardar direitos,
            respeitando os prazos de prescrição.
          </p>
        </Secao>

        <Secao titulo="7. Cookies">
          <p className={p}>
            Cookies são pequenos arquivos salvos no seu navegador. Usamos cookies necessários para o site funcionar e, se você
            aceitar, cookies de análise para entender quais páginas são mais úteis. Você pode aceitar ou recusar no aviso exibido
            no site, mudar sua escolha a qualquer momento em “Preferências de cookies”, no rodapé, e também apagar os cookies nas
            configurações do seu navegador.
          </p>
        </Secao>

        <Secao titulo="8. Como protegemos seus dados">
          <p className={p}>
            Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou uso
            indevido, como acesso restrito, contas protegidas por senha e conexão segura no site. Além da LGPD, as informações do
            seu caso estão protegidas pelo sigilo profissional previsto no Estatuto da Advocacia.
          </p>
        </Secao>

        <Secao titulo="9. Seus direitos">
          <p className={p}>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
          <ul className={ul}>
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>portabilidade dos dados;</li>
            <li>informação sobre com quem seus dados foram compartilhados;</li>
            <li>revogação do consentimento e eliminação dos dados tratados com base nele.</li>
          </ul>
          <p className={p}>
            Envie seu pedido para <Mail />. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
            (ANPD).
          </p>
        </Secao>

        <Secao titulo="10. Alterações desta política">
          <p className={p}>Esta política pode ser atualizada. A data da última atualização fica sempre no topo desta página.</p>
        </Secao>
      </article>
    </>
  );
}
