import { useEffect, useState, type FormEvent } from "react";

import { linkWhatsApp } from "@/lib/contato";

const TIPOS = [
  "Bolo de aniversário",
  "Bolo caseiro",
  "Torta",
  "Docinhos para festa",
  "Salgadinhos para festa",
  "Kit festa (bolo + doces + salgados)",
  "Outro",
];

const campo =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold-deep focus:ring-2 focus:ring-gold/30";
const rotulo = "text-xs uppercase tracking-[0.18em] text-muted-foreground";

function dataLocal(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function EncomendaForm() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");
  const [recebimento, setRecebimento] = useState("Retirada na loja");
  const [minData, setMinData] = useState<string>();

  // Calculado no navegador para usar a data local do cliente
  useEffect(() => {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    setMinData(dataLocal(amanha));
  }, []);

  function enviar(e: FormEvent) {
    e.preventDefault();
    const [ano, mes, dia] = data.split("-");
    const linhas = [
      "Olá! Gostaria de fazer uma encomenda na Amália Amora.",
      "",
      `*Nome:* ${nome.trim()}`,
      `*Encomenda:* ${tipo}`,
      detalhes.trim() ? `*Sabor / detalhes:* ${detalhes.trim()}` : null,
      quantidade.trim() ? `*Quantidade / tamanho:* ${quantidade.trim()}` : null,
      `*Para o dia:* ${dia}/${mes}/${ano}`,
      `*Recebimento:* ${recebimento}`,
    ].filter((l) => l !== null);
    window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
  }

  return (
    <form
      onSubmit={enviar}
      className="rounded-[2rem] bg-card p-6 text-left shadow-soft sm:p-9"
      aria-label="Formulário de encomenda"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={rotulo}>Seu nome *</span>
          <input
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            className={campo}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={rotulo}>O que você quer encomendar? *</span>
          <select required value={tipo} onChange={(e) => setTipo(e.target.value)} className={campo}>
            <option value="" disabled>
              Escolha uma opção
            </option>
            {TIPOS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={rotulo}>Sabor, recheio e detalhes</span>
          <textarea
            rows={3}
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            placeholder="Ex.: bolo de chocolate com recheio de morango, tema infantil"
            className={`${campo} resize-none`}
          />
        </label>

        <label className="block">
          <span className={rotulo}>Quantidade / tamanho</span>
          <input
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            placeholder="Ex.: 2 kg, 100 docinhos"
            className={campo}
          />
        </label>

        <label className="block">
          <span className={rotulo}>Para quando? *</span>
          <input
            required
            type="date"
            min={minData}
            value={data}
            onChange={(e) => setData(e.target.value)}
            className={campo}
          />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={rotulo}>Como prefere receber?</legend>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {["Retirada na loja", "Entrega (a combinar)"].map((op) => (
              <label
                key={op}
                className={`cursor-pointer rounded-2xl border px-4 py-3 focus-within:ring-2 focus-within:ring-gold/40 text-center text-sm transition-colors ${
                  recebimento === op
                    ? "border-gold-deep bg-champagne/30 text-primary"
                    : "border-border text-muted-foreground hover:text-primary"
                }`}
              >
                <input
                  type="radio"
                  name="recebimento"
                  value={op}
                  checked={recebimento === op}
                  onChange={() => setRecebimento(op)}
                  className="sr-only"
                />
                {op}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-gold-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
      >
        Enviar encomenda pelo WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        A mensagem abre pronta no WhatsApp. Confirmamos valores e disponibilidade por lá.
      </p>
    </form>
  );
}
