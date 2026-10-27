// Dados do escritório usados em todo o site. Altere aqui e o site inteiro acompanha.

export const SITE_URL = "https://www.macedofaria.com.br";
export const SITE_NAME = "Macedo Faria Advogados";

export const WHATSAPP_NUMBER = "5511998320101"; // secretária
export const WHATSAPP_DISPLAY = "(11) 99832-0101";
export const PHONE_NUMBER = "+5511991175030";
export const PHONE_DISPLAY = "(11) 99117-5030";

export const EMAIL_CONTATO = "contato@macedofaria.com.br";
export const EMAIL_EDUARDO = "eduardo@macedofaria.com.br";

export const INSTAGRAM_URL = "https://www.instagram.com/macedofaria.adv/";
export const FACEBOOK_URL = "https://www.facebook.com/macedofaria.adv";
export const CREDITO_URL = "https://chrismagalhaes.com.br/";

export const ENDERECO = {
  rua: "Rua do Bosque, 199",
  bairro: "Jardim Bela Vista",
  cidade: "Santo André",
  uf: "SP",
  cep: "",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+do+Bosque+199+Jardim+Bela+Vista+Santo+Andre+SP";

export const HORARIO = "Segunda a sexta, das 9h às 18h";
export const OABS = "OAB/SP 293.029 · OAB/SP 323.082";
export const AVISO_OAB = "Conteúdo informativo. Cada situação exige análise individual.";

export function waLink(texto = "Olá, gostaria de agendar um atendimento.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
}

export const AREAS = [
  { href: "/previdenciario", label: "Previdenciário" },
  { href: "/trabalhista", label: "Trabalhista" },
  { href: "/isencoes-fiscais", label: "Isenções e PcD" },
] as const;
