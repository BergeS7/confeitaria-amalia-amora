import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Instagram, Star, Wheat, Coffee, Cake } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import paes from "@/assets/paes.jpg";
import bolos from "@/assets/bolos.jpg";
import doces from "@/assets/doces.jpg";
import cafes from "@/assets/cafes.jpg";
import salgados from "@/assets/salgados.jpg";
import about from "@/assets/about.jpg";
import ambiente1 from "@/assets/ambiente1.jpg";
import ambiente2 from "@/assets/ambiente2.jpg";
import croissant from "@/assets/croissant.jpg";
import fatia from "@/assets/fatia.jpg";
import sourdough from "@/assets/sourdough.jpg";
import emblema from "@/assets/emblema.webp";
import icone from "@/assets/icone.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amália Amora | Confeitaria, Doces, Salgados e Pães em Penalva - MA" },
      {
        name: "description",
        content:
          "Confeitaria Amália Amora no Povoado Jacaré, Penalva - MA: pães fresquinhos, bolos, doces e salgados. Encomendas pelo WhatsApp (98) 98469-3417.",
      },
      {
        name: "keywords",
        content:
          "confeitaria Penalva, padaria Penalva MA, bolos Penalva, doces e salgados Penalva, panificação, Povoado Jacaré, encomenda de bolo, Amália Amora",
      },
      { property: "og:title", content: "Amália Amora | Confeitaria e Panificação em Penalva - MA" },
      {
        property: "og:description",
        content:
          "Sabor que conquista em cada mordida. Pães fresquinhos, doces e salgados todos os dias em Penalva - MA.",
      },
      { property: "og:image", content: hero },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Amália Amora" },
      { name: "geo.region", content: "BR-MA" },
      { name: "geo.placename", content: "Penalva" },
      { name: "geo.position", content: "-3.324734;-45.288633" },
      { name: "ICBM", content: "-3.324734, -45.288633" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Amália Amora — Confeitaria doces e salgados",
          slogan: "Sabor que conquista em cada mordida",
          description:
            "Confeitaria e panificação em Penalva - MA: pães, bolos, doces e salgados. Encomendas pelo WhatsApp.",
          telephone: "+55 98 98469-3417",
          servesCuisine: ["Padaria", "Confeitaria", "Doces", "Salgados"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Pov. Jacaré - R. do Comércio, S/N",
            addressLocality: "Penalva",
            addressRegion: "MA",
            postalCode: "65213-000",
            addressCountry: "BR",
          },
          geo: { "@type": "GeoCoordinates", latitude: -3.324734, longitude: -45.288633 },
          hasMap: "https://www.google.com/maps?q=-3.324734,-45.288633",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "06:30",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "07:00",
              closes: "12:00",
            },
          ],
          sameAs: ["https://www.instagram.com/confeitariaamaliaamora/"],
          acceptsReservations: false,
        }),
      },
    ],
  }),
  component: Index,
});

// Dados de contato — altere somente aqui
const TELEFONE = "5598984693417"; // DDI + DDD + número, só dígitos
const TELEFONE_EXIBICAO = "(98) 98469-3417";
const WHATSAPP = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(
  "Olá! Gostaria de fazer um pedido na Amália Amora.",
)}`;
const INSTAGRAM_USUARIO = "confeitariaamaliaamora";
const INSTAGRAM = `https://www.instagram.com/${INSTAGRAM_USUARIO}/`;
const ENDERECO = ["Pov. Jacaré - R. do Comércio, S/N", "Penalva - MA, 65213-000"];
const COORDENADAS = "-3.324734,-45.288633";
const MAPA_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${COORDENADAS}`;
const MAPA_EMBED = `https://www.google.com/maps?q=${COORDENADAS}&z=16&output=embed`;
const HORARIOS = ["Segunda a sábado · 06:30 às 18:00", "Domingo · 07:00 às 12:00"];

// Contato de quem desenvolveu o site (rodapé)
const DESENVOLVEDOR_WHATSAPP = `https://wa.me/5598974009468?text=${encodeURIComponent(
  "Olá! Vi o site da Amália Amora e gostaria de um site também.",
)}`;

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Especiais", href: "#especiais" },
  { label: "Nossa Padaria", href: "#padaria" },
  { label: "Contato", href: "#contato" },
];

const destaques = [
  {
    icon: Wheat,
    title: "Produção Artesanal",
    text: "Preparados diariamente com ingredientes selecionados.",
  },
  {
    icon: Coffee,
    title: "Café & Afeto",
    text: "Um espaço criado para você aproveitar cada momento.",
  },
  {
    icon: Cake,
    title: "Feito com Carinho",
    text: "Receitas que transformam ingredientes em boas lembranças.",
  },
];

const categorias = [
  {
    nome: "Pães Artesanais",
    desc: "Crocantes por fora, macios por dentro e preparados diariamente.",
    img: paes,
  },
  {
    nome: "Bolos & Tortas",
    desc: "Receitas especiais para transformar qualquer ocasião.",
    img: bolos,
  },
  { nome: "Doces", desc: "Pequenos detalhes capazes de deixar o seu dia mais doce.", img: doces },
  { nome: "Cafés", desc: "O acompanhamento perfeito para nossos produtos.", img: cafes },
  { nome: "Salgados", desc: "Opções deliciosas para qualquer hora do dia.", img: salgados },
];

const especiais = [
  { nome: "Croissant Artesanal", preco: "R$ 8,90", img: croissant },
  { nome: "Pão de Fermentação Natural", preco: "R$ 16,90", img: sourdough },
  { nome: "Fatia de Bolo Caseiro", preco: "R$ 12,90", img: fatia },
];

const depoimentos = [
  {
    texto:
      "Tudo é maravilhoso. O pão sempre fresquinho e o ambiente é muito aconchegante.",
    nome: "Marina L.",
  },
  { texto: "Os bolos são incríveis e o atendimento faz você se sentir em casa.", nome: "Rafael S." },
  { texto: "Virou meu lugar favorito para tomar café.", nome: "Juliana P." },
];

const instaGrid = [paes, cafes, doces, ambiente2, bolos, croissant];

function Logo({ tone = "coffee" }: { tone?: "coffee" | "light" }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Amália Amora, voltar ao início">
      <img src={icone} alt="" width={44} height={44} className="h-10 w-10 sm:h-11 sm:w-11" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-script text-[1.9rem] sm:text-[2.1rem] ${
            tone === "light" ? "text-gold" : "text-gold-gradient"
          }`}
        >
          Amália Amora
        </span>
        <span
          className={`mt-0.5 text-[0.55rem] uppercase tracking-[0.34em] ${
            tone === "light" ? "text-primary-foreground/60" : "text-muted-foreground"
          }`}
        >
          Confeitaria · Panificação
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <div className="flex min-w-0 items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            Fazer Pedido
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block rounded-full bg-gold px-6 py-4 text-center text-base font-medium text-gold-foreground"
          >
            Fazer Pedido
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.46.13-.61.15-.15.5-.55.6-.72.1-.17.05-.32-.05-.47l-.9-2.18c-.23-.55-.47-.48-.65-.48h-.55c-.2 0-.5.07-.75.35-.25.28-.97.95-.97 2.3 0 1.36.99 2.67 1.12 2.85.13.18 1.9 3.02 4.68 4.12 2.78 1.1 2.78.73 3.28.68.5-.05 1.6-.65 1.83-1.28.23-.63.23-1.16.15-1.28-.07-.12-.27-.2-.57-.35ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.32A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.19-.31A8.2 8.2 0 1 1 12 20.2Z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div id="inicio" className="overflow-x-hidden bg-background">
      <Header />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="grain-cream relative pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal>
            <p className="eyebrow">Confeitaria · Doces e salgados · Panificação</p>
            <h1 className="mt-6 text-[2.7rem] leading-[1.02] text-primary sm:text-6xl lg:text-7xl">
              <span className="sr-only">Amália Amora, confeitaria em Penalva - MA: </span>
              Sabor que conquista
              <br />
              <span className="font-script text-[1.3em] leading-[1.05] text-gold-gradient">
                em cada mordida.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pães fresquinhos, bolos, doces e salgados feitos com carinho todos os dias, aqui no
              Povoado Jacaré, em Penalva - MA.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#produtos"
                className="rounded-full bg-primary px-8 py-4 text-center text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Conhecer nossos produtos
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/25 px-8 py-4 text-center text-sm font-medium text-primary transition-colors duration-300 hover:bg-secondary"
              >
                Pedir pelo WhatsApp
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span>Pães fresquinhos</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Doces e salgados</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Encomendas</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-gold/50 lg:block" />
            <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-full bg-gold/25 blur-2xl lg:block" />
            <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] shadow-lift">
              <img
                src={hero}
                alt="Mesa de padaria artesanal com croissants, pães, bolos e café pela manhã"
                width={1408}
                height={1600}
                className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 sm:h-[34rem] lg:h-[38rem]"
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-2xl bg-card/95 px-5 py-4 shadow-soft backdrop-blur">
              <p className="font-display text-2xl text-primary">06:30</p>
              <p className="text-xs text-muted-foreground">primeira fornada do dia</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="border-y border-border/70 bg-sand/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-3 lg:px-10">
          {destaques.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <div className="flex flex-col gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-gold-deep shadow-soft">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl text-primary">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NOSSOS FAVORITOS */}
      <section id="produtos" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="eyebrow">Nossos favoritos</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-primary sm:text-5xl">
            Tem sempre algo delicioso esperando por você.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal key={c.nome} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.nome}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.07]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl text-primary">{c.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 border-b border-gold-deep/40 pb-1 text-sm text-gold-deep transition-all duration-300 hover:gap-3 hover:border-gold-deep"
                  >
                    Ver opções <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ESPECIAL DO DIA */}
      <section
        id="especiais"
        className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28"
      >
        <img
          src={emblema}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute -right-24 -top-10 w-[34rem] max-w-none opacity-[0.07]"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">
              Especial do dia
            </p>
            <h2 className="mt-5 text-4xl text-gold-gradient sm:text-5xl">Saindo do forno</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/75">
              Todos os dias nossa cozinha prepara algo especial.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {especiais.map((e, i) => (
              <Reveal key={e.nome} delay={i * 100}>
                <div className="group overflow-hidden rounded-[2rem] bg-card/95 p-4 shadow-soft transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      src={e.img}
                      alt={e.nome}
                      loading="lazy"
                      width={900}
                      height={900}
                      className="h-56 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-end justify-between gap-4 px-3 py-5">
                    <h3 className="min-w-0 text-xl leading-snug text-primary">{e.nome}</h3>
                    <p className="shrink-0 font-display text-2xl text-gold-deep">{e.preco}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Ver cardápio
            </a>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Nossa história</p>
            <h2 className="mt-5 text-4xl leading-tight text-primary sm:text-5xl">
              Uma padaria feita de histórias, aromas e afeto.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Na Amália Amora acreditamos que comida também é uma forma de carinho.
              </p>
              <p>
                Cada pão, bolo ou doce é preparado com cuidado, ingredientes selecionados e aquele
                toque artesanal que transforma uma simples receita em uma lembrança especial.
              </p>
              <p>Queremos que cada visita seja um pequeno momento de felicidade.</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[6rem] shadow-lift">
              <img
                src={about}
                alt="Mãos moldando massa de pão artesanal na cozinha da padaria"
                loading="lazy"
                width={1200}
                height={1408}
                className="h-[24rem] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 lg:h-[34rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="padaria" className="bg-sand/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="eyebrow">A experiência</p>
            <h2 className="mt-5 text-4xl text-primary sm:text-5xl">Mais do que uma padaria.</h2>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="group overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={ambiente1}
                  alt="Salão da padaria com mesas de madeira e pessoas conversando"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-72 w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 lg:h-[27rem]"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between gap-7">
                <div className="rounded-[2rem] bg-card p-8 shadow-soft">
                  <h3 className="text-3xl leading-snug text-primary">
                    Um cantinho para desacelerar.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Venha tomar um café, conversar, trabalhar ou simplesmente aproveitar o aroma de
                    pão fresquinho.
                  </p>
                </div>
                <div className="group overflow-hidden rounded-[2rem] shadow-soft">
                  <img
                    src={ambiente2}
                    alt="Balcão com vitrine de pães e bolos da padaria"
                    loading="lazy"
                    width={1000}
                    height={1200}
                    className="h-56 w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENCOMENDAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="grain-cream overflow-hidden rounded-[2.5rem] bg-card px-7 py-14 text-center shadow-soft sm:px-16 lg:py-20">
            <p className="eyebrow">Encomendas</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight text-primary sm:text-5xl">
              Seu momento especial merece um sabor especial.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Bolos, tortas, doces e kits preparados especialmente para aniversários, reuniões,
              presentes e momentos especiais.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded-full bg-gold px-9 py-4 text-sm font-medium text-gold-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Fazer uma encomenda
            </a>
          </div>
        </Reveal>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-y border-border/70 bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="text-4xl text-primary sm:text-5xl">Quem prova, volta.</h2>
          </Reveal>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Reveal key={d.nome} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-[2rem] bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <div className="flex gap-1 text-gold-deep">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-primary italic">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {d.nome}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="eyebrow">@{INSTAGRAM_USUARIO}</p>
              <h2 className="mt-5 text-4xl text-primary sm:text-5xl">
                Um pouquinho da Amália Amora
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Acompanhe nossas fornadas, novidades e delícias pelo Instagram.
              </p>
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm text-primary transition-colors hover:bg-secondary"
            >
              <Instagram className="h-4 w-4" /> Seguir no Instagram
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {instaGrid.map((img, i) => (
            <Reveal key={i} delay={i * 70}>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`Publicação ${i + 1} da Amália Amora no Instagram`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover transition-transform duration-[900ms] hover:scale-110"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="contato" className="bg-sand/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Onde nos encontrar</p>
              <h2 className="mt-5 text-4xl leading-tight text-primary sm:text-5xl">
                Venha sentir o cheirinho de pão saindo do forno.
              </h2>

              <dl className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-lg text-primary">
                      {ENDERECO.map((linha) => (
                        <span key={linha} className="block">
                          {linha}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Horário
                    </dt>
                    <dd className="mt-1 text-primary">
                      {HORARIOS.map((h) => (
                        <span key={h} className="block">
                          {h}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Telefone / WhatsApp
                    </dt>
                    <dd className="mt-1 text-lg text-primary">
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-gold-deep"
                      >
                        {TELEFONE_EXIBICAO}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPA_ROTA}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-8 py-4 text-center text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                >
                  Como chegar
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-primary/25 px-8 py-4 text-center text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  Pedir pelo WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full overflow-hidden rounded-[2rem] shadow-soft">
                <iframe
                  title="Mapa da Amália Amora"
                  src={MAPA_EMBED}
                  loading="lazy"
                  className="h-80 w-full border-0 lg:h-full lg:min-h-[26rem]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <Logo tone="light" />
              <p className="mt-4 font-script text-2xl text-gold">Sabor que conquista em cada mordida</p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-primary-foreground/70">
                {ENDERECO.join(" · ")}
                <br />
                {TELEFONE_EXIBICAO}
              </address>
            </div>
            <nav className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              {["Início", "Produtos", "Sobre", "Contato"].map((label, i) => (
                <a
                  key={label}
                  href={["#inicio", "#produtos", "#sobre", "#contato"][i]}
                  className="w-fit transition-colors hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {[{ icon: Instagram, href: INSTAGRAM, label: "Instagram" }].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Amália Amora. Todos os direitos reservados.</p>
            <a
              href={DESENVOLVEDOR_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              Quer um site assim? Fale com o desenvolvedor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
