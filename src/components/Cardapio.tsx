import { Reveal } from "@/components/Reveal";
import { CARDAPIO } from "@/lib/cardapio";
import { linkWhatsApp } from "@/lib/contato";

export function Cardapio({
  categoria,
  onCategoria,
}: {
  categoria: string;
  onCategoria: (id: string) => void;
}) {
  const atual = CARDAPIO.find((c) => c.id === categoria) ?? CARDAPIO[0];
  if (!atual) return null;

  return (
    <section id="cardapio" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <p className="eyebrow">Cardápio</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-primary sm:text-5xl">
          Escolha o seu e peça pelo WhatsApp.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Toque em um item para pedir. Itens marcados como encomenda precisam de alguns dias de
          antecedência.
        </p>
      </Reveal>

      <div
        role="tablist"
        aria-label="Categorias do cardápio"
        className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0"
      >
        {CARDAPIO.map((c) => {
          const ativo = c.id === atual.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={ativo}
              aria-controls="cardapio-itens"
              onClick={() => onCategoria(c.id)}
              className={`shrink-0 rounded-full px-6 py-3 text-sm transition-colors duration-300 ${
                ativo
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {c.nome}
            </button>
          );
        })}
      </div>

      <ul id="cardapio-itens" role="tabpanel" className="mt-8 grid gap-4 md:grid-cols-2">
        {atual.itens.map((item) => (
          <li key={item.nome}>
            <a
              href={linkWhatsApp(`Olá! Gostaria de pedir: ${item.nome}.`)}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full items-start justify-between gap-5 rounded-[1.5rem] bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="min-w-0">
                <h3 className="text-2xl leading-snug text-primary">{item.nome}</h3>
                {item.descricao && (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.descricao}
                  </p>
                )}
                {item.encomenda && (
                  <span className="mt-3 inline-block rounded-full bg-champagne/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold-deep">
                    Sob encomenda
                  </span>
                )}
              </div>
              <div className="flex shrink-0 flex-col items-end gap-3">
                <span className="font-display text-2xl text-gold-deep">
                  {item.preco ?? <span className="text-base text-muted-foreground">Consulte</span>}
                </span>
                <span className="text-xs text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5">
                  Pedir →
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
