import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import icone from "@/assets/icone.webp";
import { abrirPreferenciasCookies } from "@/lib/consentimento";
import { SITE_URL, TELEFONE_EXIBICAO, linkWhatsApp } from "@/lib/contato";

const ATUALIZADO_EM = "25 de setembro de 2026";
const WHATSAPP_PRIVACIDADE = linkWhatsApp(
  "Olá! Tenho uma solicitação sobre meus dados pessoais (LGPD).",
);

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e Cookies | Amália Amora" },
      {
        name: "description",
        content:
          "Como a confeitaria Amália Amora trata dados pessoais e cookies no site, de acordo com a LGPD (Lei nº 13.709/2018).",
      },
      { property: "og:url", content: `${SITE_URL}/privacidade` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
  }),
  component: Privacidade,
});

function Secao({ id, titulo, children }: { id: string; titulo: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-3xl text-primary">{titulo}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-primary">
        {children}
      </div>
    </section>
  );
}

const indice = [
  ["quem-somos", "1. Quem somos"],
  ["dados", "2. Quais dados tratamos"],
  ["finalidades", "3. Para que usamos e base legal"],
  ["compartilhamento", "4. Com quem compartilhamos"],
  ["cookies", "5. Cookies e armazenamento local"],
  ["retencao", "6. Por quanto tempo guardamos"],
  ["direitos", "7. Seus direitos"],
  ["seguranca", "8. Segurança"],
  ["criancas", "9. Crianças e adolescentes"],
  ["alteracoes", "10. Alterações desta política"],
  ["contato", "11. Contato"],
];

const cookies = [
  {
    nome: "amalia-amora-consentimento",
    origem: "Este site (armazenamento local do navegador)",
    finalidade: "Lembrar se você aceitou ou recusou o mapa do Google.",
    duracao: "Até você limpar os dados do navegador",
    tipo: "Necessário",
  },
  {
    nome: "Cookies do Google Maps (ex.: NID, AEC, SOCS)",
    origem: "Google (terceiro)",
    finalidade: "Exibir o mapa interativo e guardar preferências do próprio Google.",
    duracao: "Definida pelo Google (em geral de 6 a 13 meses)",
    tipo: "Terceiros, só com o seu consentimento",
  },
];

function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="Amália Amora, página inicial"
          >
            <img src={icone} alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-script text-[1.9rem] leading-none text-gold-gradient">
              Amália Amora
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-full border border-primary/25 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-secondary"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 lg:py-20">
        <p className="eyebrow">LGPD · Lei nº 13.709/2018</p>
        <h1 className="mt-5 text-4xl leading-tight text-primary sm:text-5xl">
          Política de Privacidade e Cookies
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {ATUALIZADO_EM}</p>

        <div className="mt-8 rounded-[1.5rem] bg-card p-6 shadow-soft">
          <p className="font-display text-xl text-primary">Resumo</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Não vendemos seus dados e não usamos cookies de publicidade ou rastreamento.</li>
            <li>
              O site não tem cadastro nem banco de dados. O formulário de encomenda não guarda nada:
              ele apenas abre o WhatsApp com a mensagem pronta, e você decide se envia.
            </li>
            <li>O mapa do Google só é carregado se você permitir.</li>
            <li>Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento.</li>
          </ul>
        </div>

        <nav aria-label="Índice" className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nesta página</p>
          <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
            {indice.map(([id, titulo]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-gold-deep hover:underline">
                  {titulo}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-14">
          <Secao id="quem-somos" titulo="1. Quem somos">
            <p>
              Esta política vale para o site <strong>{SITE_URL.replace("https://", "")}</strong>, da{" "}
              <strong>Amália Amora, Confeitaria doces e salgados</strong>, localizada no Pov.
              Jacaré, R. do Comércio, S/N, Penalva - MA, CEP 65213-000. Para fins da LGPD, a Amália
              Amora é a <strong>controladora</strong> dos dados pessoais tratados por meio deste
              site.
            </p>
          </Secao>

          <Secao id="dados" titulo="2. Quais dados tratamos">
            <p>
              <strong>Dados que você nos envia pelo WhatsApp.</strong> Ao usar os botões de pedido,
              o cardápio ou o formulário de encomenda, o site abre o WhatsApp com uma mensagem
              pronta. Se você decidir enviar, recebemos seu nome, número de telefone e as
              informações do pedido (por exemplo: produto, sabor, quantidade, data e forma de
              recebimento). Esses dados não passam por nenhum servidor do site: vão direto do seu
              aparelho para o WhatsApp.
            </p>
            <p>
              <strong>Dados técnicos de navegação.</strong> Como qualquer site, a empresa de
              hospedagem registra automaticamente informações técnicas das visitas, como endereço
              IP, data e hora de acesso, navegador e página acessada. Esses registros servem para
              manter o site funcionando e seguro.
            </p>
            <p>
              <strong>O que não fazemos.</strong> Não temos cadastro, login, newsletter, ferramentas
              de análise de audiência (como Google Analytics) nem pixels de publicidade.
            </p>
          </Secao>

          <Secao id="finalidades" titulo="3. Para que usamos e base legal">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Atender pedidos e encomendas</strong>: responder mensagens, confirmar
                valores, prazos e combinar retirada ou entrega. Base legal: procedimentos
                preliminares e execução de contrato a pedido do titular (art. 7º, V, da LGPD).
              </li>
              <li>
                <strong>Manter o site funcionando e seguro</strong>: registros técnicos da
                hospedagem. Base legal: legítimo interesse (art. 7º, IX) e cumprimento de obrigação
                legal (art. 7º, II, combinado com o Marco Civil da Internet, Lei nº 12.965/2014).
              </li>
              <li>
                <strong>Exibir o mapa de localização</strong>: carregamento do Google Maps. Base
                legal: consentimento (art. 7º, I), que você pode retirar a qualquer momento.
              </li>
            </ul>
          </Secao>

          <Secao id="compartilhamento" titulo="4. Com quem compartilhamos">
            <p>
              Não vendemos nem alugamos dados pessoais. O site depende dos seguintes serviços de
              terceiros, cada um com a sua própria política de privacidade:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>WhatsApp (Meta)</strong>: canal pelo qual você envia pedidos e encomendas.
              </li>
              <li>
                <strong>Vercel Inc.</strong>: hospedagem do site.
              </li>
              <li>
                <strong>Google</strong>: fontes tipográficas (Google Fonts), que recebem o endereço
                IP para entregar os arquivos de fonte, e o mapa (Google Maps), carregado apenas com
                o seu consentimento.
              </li>
              <li>
                <strong>Instagram (Meta)</strong>: apenas se você clicar nos links para o nosso
                perfil.
              </li>
            </ul>
            <p>
              Alguns desses fornecedores podem processar dados fora do Brasil. Nesses casos, a
              transferência internacional segue as hipóteses do art. 33 da LGPD, com base nas
              garantias contratuais oferecidas por esses fornecedores.
            </p>
            <p>
              Também podemos compartilhar dados quando exigido por lei ou por ordem de autoridade
              competente.
            </p>
          </Secao>

          <Secao id="cookies" titulo="5. Cookies e armazenamento local">
            <p>
              Cookies são pequenos arquivos guardados no seu navegador. Este site{" "}
              <strong>não cria cookies próprios</strong>. Usamos apenas um registro no armazenamento
              local do navegador para lembrar a sua escolha sobre o mapa. Cookies de terceiros só
              aparecem se você aceitar carregar o mapa do Google.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead className="bg-sand/60 text-xs uppercase tracking-[0.12em] text-primary">
                  <tr>
                    <th className="px-4 py-3 font-medium">Nome</th>
                    <th className="px-4 py-3 font-medium">Origem</th>
                    <th className="px-4 py-3 font-medium">Finalidade</th>
                    <th className="px-4 py-3 font-medium">Duração</th>
                    <th className="px-4 py-3 font-medium">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.nome} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-medium text-primary">{c.nome}</td>
                      <td className="px-4 py-3">{c.origem}</td>
                      <td className="px-4 py-3">{c.finalidade}</td>
                      <td className="px-4 py-3">{c.duracao}</td>
                      <td className="px-4 py-3">{c.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Você pode mudar sua escolha quando quiser:{" "}
              <button
                onClick={abrirPreferenciasCookies}
                className="text-gold-deep underline underline-offset-4"
              >
                abrir preferências de cookies
              </button>
              . Também é possível apagar cookies e dados de sites nas configurações do seu
              navegador.
            </p>
          </Secao>

          <Secao id="retencao" titulo="6. Por quanto tempo guardamos">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Conversas de pedidos no WhatsApp</strong>: pelo tempo necessário para
                atender o pedido e manter o histórico de atendimento. Você pode pedir a exclusão a
                qualquer momento.
              </li>
              <li>
                <strong>Registros técnicos de acesso</strong>: pelo período definido pela hospedagem
                e, quando aplicável, pelo prazo mínimo de 6 meses previsto no art. 15 do Marco Civil
                da Internet.
              </li>
              <li>
                <strong>Escolha sobre cookies</strong>: fica no seu navegador até você apagá-la.
              </li>
            </ul>
          </Secao>

          <Secao id="direitos" titulo="7. Seus direitos">
            <p>Pelo art. 18 da LGPD, você pode, a qualquer momento e gratuitamente, pedir:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>confirmação de que tratamos seus dados e acesso a eles;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>portabilidade dos dados a outro fornecedor;</li>
              <li>eliminação dos dados tratados com base no seu consentimento;</li>
              <li>informação sobre com quem compartilhamos seus dados;</li>
              <li>revogação do consentimento.</li>
            </ul>
            <p>
              Para exercer seus direitos, fale conosco pelos canais da seção 11. Responderemos em
              até 15 dias. Você também pode apresentar reclamação à Autoridade Nacional de Proteção
              de Dados (ANPD), em gov.br/anpd.
            </p>
          </Secao>

          <Secao id="seguranca" titulo="8. Segurança">
            <p>
              O site usa conexão criptografada (HTTPS) e não armazena dados pessoais em banco de
              dados próprio. Mesmo assim, nenhum sistema na internet é totalmente imune a riscos. Em
              caso de incidente de segurança relevante, comunicaremos os afetados e a ANPD, conforme
              a lei.
            </p>
          </Secao>

          <Secao id="criancas" titulo="9. Crianças e adolescentes">
            <p>
              O site não é direcionado a menores de 18 anos. Pedidos e encomendas de menores devem
              ser feitos por um responsável legal.
            </p>
          </Secao>

          <Secao id="alteracoes" titulo="10. Alterações desta política">
            <p>
              Podemos atualizar esta política para refletir mudanças no site ou na lei. A data da
              última atualização fica sempre no topo da página.
            </p>
          </Secao>

          <Secao id="contato" titulo="11. Contato">
            <p>
              Para dúvidas sobre esta política ou pedidos sobre seus dados pessoais, fale com a
              Amália Amora:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_PRIVACIDADE}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-deep underline underline-offset-4"
                >
                  {TELEFONE_EXIBICAO}
                </a>
              </li>
              <li>Endereço: Pov. Jacaré, R. do Comércio, S/N, Penalva - MA, CEP 65213-000</li>
            </ul>
          </Secao>
        </div>
      </main>

      <footer className="border-t border-border/70 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amália Amora. Todos os direitos reservados.
      </footer>
    </div>
  );
}
