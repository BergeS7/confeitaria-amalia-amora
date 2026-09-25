import { useState } from "react";
import { MapPin } from "lucide-react";

import { useConsentimento } from "@/lib/consentimento";

export function MapaComConsentimento({ src, rota }: { src: string; rota: string }) {
  const { consentimento } = useConsentimento();
  const [liberadoAgora, setLiberadoAgora] = useState(false);

  if (consentimento === "aceito" || liberadoAgora) {
    return (
      <iframe
        title="Mapa da Amália Amora"
        src={src}
        loading="lazy"
        className="h-80 w-full border-0 lg:h-full lg:min-h-[26rem]"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="grain-cream flex h-80 w-full flex-col items-center justify-center gap-4 bg-card px-6 text-center lg:h-full lg:min-h-[26rem]">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-gold">
        <MapPin className="h-6 w-6" />
      </span>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        O mapa é fornecido pelo Google Maps, que pode usar cookies. Ao carregar, você concorda com o
        uso deles para exibir o mapa.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => setLiberadoAgora(true)}
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Carregar mapa
        </button>
        <a
          href={rota}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-primary/25 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}
