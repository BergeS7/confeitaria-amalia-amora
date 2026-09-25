import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";

import { salvarConsentimento, useAbrirPreferencias, useConsentimento } from "@/lib/consentimento";

export function CookieBanner() {
  const { consentimento, pronto } = useConsentimento();
  const [reaberto, setReaberto] = useState(false);
  useAbrirPreferencias(useCallback(() => setReaberto(true), []));

  if (!pronto || (consentimento !== null && !reaberto)) return null;

  function escolher(valor: "aceito" | "recusado") {
    salvarConsentimento(valor);
    setReaberto(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-[1.5rem] border border-border bg-card p-5 shadow-lift sm:inset-x-5 sm:bottom-5 sm:p-6"
    >
      <p className="font-display text-xl text-primary">Sua privacidade</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Este site não usa cookies próprios de rastreamento nem publicidade. O mapa de localização é
        fornecido pelo Google e pode usar cookies. Ele só é carregado se você aceitar. Saiba mais na
        nossa{" "}
        <Link to="/privacidade" className="text-gold-deep underline underline-offset-4">
          Política de Privacidade e Cookies
        </Link>
        .
        {consentimento && (
          <span className="mt-1 block">
            Escolha atual: <strong>{consentimento === "aceito" ? "aceito" : "recusado"}</strong>.
          </span>
        )}
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={() => escolher("recusado")}
          className="rounded-full border border-primary/25 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
        >
          Recusar
        </button>
        <button
          onClick={() => escolher("aceito")}
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
