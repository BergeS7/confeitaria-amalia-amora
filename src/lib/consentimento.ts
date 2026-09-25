import { useEffect, useState } from "react";

// Consentimento de cookies de terceiros (hoje: mapa do Google).
// Guardado só no navegador do visitante; nada é enviado a servidor.

export type Consentimento = "aceito" | "recusado" | null;

const CHAVE = "amalia-amora-consentimento";
const EVENTO_MUDOU = "consentimento:mudou";
const EVENTO_ABRIR = "consentimento:abrir";

function ler(): Consentimento {
  try {
    const v = localStorage.getItem(CHAVE);
    return v === "aceito" || v === "recusado" ? v : null;
  } catch {
    return null;
  }
}

export function salvarConsentimento(valor: Exclude<Consentimento, null>) {
  try {
    localStorage.setItem(CHAVE, valor);
  } catch {
    // Navegação privada ou armazenamento bloqueado: vale só nesta visita
  }
  window.dispatchEvent(new CustomEvent<Consentimento>(EVENTO_MUDOU, { detail: valor }));
}

export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR));
}

export function useConsentimento() {
  const [consentimento, setConsentimento] = useState<Consentimento>(null);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    setConsentimento(ler());
    setPronto(true);
    const aoMudar = (e: Event) => setConsentimento((e as CustomEvent<Consentimento>).detail);
    window.addEventListener(EVENTO_MUDOU, aoMudar);
    return () => window.removeEventListener(EVENTO_MUDOU, aoMudar);
  }, []);

  return { consentimento, pronto };
}

export function useAbrirPreferencias(aoAbrir: () => void) {
  useEffect(() => {
    window.addEventListener(EVENTO_ABRIR, aoAbrir);
    return () => window.removeEventListener(EVENTO_ABRIR, aoAbrir);
  }, [aoAbrir]);
}
