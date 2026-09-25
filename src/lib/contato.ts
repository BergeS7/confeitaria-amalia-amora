// Dados de contato — altere somente aqui
export const SITE_URL = "https://amaliaamora.vercel.app";
export const TELEFONE = "5598984693417"; // DDI + DDD + número, só dígitos
export const TELEFONE_EXIBICAO = "(98) 98469-3417";

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`;
}
