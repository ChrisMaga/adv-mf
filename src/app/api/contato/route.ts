import { Resend } from "resend";

// Destino das mensagens do formulário (Google Workspace do escritório)
const DESTINO = "contato@macedofaria.com.br";
const REMETENTE = "Site Macedo Faria <contato@macedofaria.com.br>";

// Rate limiting simples em memória (por IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3; // máximo de envios
const RATE_LIMIT_WINDOW = 60_000; // janela de 1 minuto (ms)

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? req.headers.get("x-real-ip") ?? "unknown";

  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now < entry.resetAt) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return Response.json({ ok: false, error: "Muitas tentativas. Aguarde 1 minuto." }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
  }

  try {
    const body = await req.json();
    const nome = String(body.nome ?? "").trim().slice(0, 200);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const telefone = String(body.telefone ?? "").trim().slice(0, 50);
    const assunto = String(body.assunto ?? "").trim().slice(0, 100);
    const mensagem = String(body.mensagem ?? "").trim().slice(0, 2000);
    const consentimento = body.consentimento === true;

    if (!nome || !email || !telefone || !mensagem) {
      return Response.json({ ok: false, error: "Preencha todos os campos." }, { status: 400 });
    }
    if (!consentimento) {
      return Response.json(
        { ok: false, error: "Para enviar, marque que concorda com a Política de Privacidade." },
        { status: 400 }
      );
    }

    // Criado aqui (e não no topo) para o build funcionar mesmo sem a chave configurada
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: REMETENTE,
      to: DESTINO,
      replyTo: email,
      subject: `Novo contato pelo site: ${sanitize(nome)}${assunto ? ` (${sanitize(assunto)})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C3546;">Novo contato pelo site</h2>
          <hr/>
          <p><strong>Nome:</strong> ${sanitize(nome)}</p>
          <p><strong>E-mail:</strong> ${sanitize(email)}</p>
          <p><strong>WhatsApp:</strong> ${sanitize(telefone)}</p>
          <p><strong>Assunto:</strong> ${sanitize(assunto || "Não informado")}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${sanitize(mensagem)}</p>
          <p style="color: #666; font-size: 12px;">A pessoa aceitou a Política de Privacidade em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro Resend:", JSON.stringify(error));
      return Response.json({ ok: false, error: "Não foi possível enviar agora. Tente pelo WhatsApp." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Erro no formulário de contato:", error);
    // Não devolve detalhes do erro para quem está no site
    return Response.json({ ok: false, error: "Não foi possível enviar agora. Tente pelo WhatsApp." }, { status: 500 });
  }
}
