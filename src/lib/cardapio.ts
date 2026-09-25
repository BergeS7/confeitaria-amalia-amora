// Cardápio do site — edite aqui os produtos e preços.
// `preco` é opcional: sem preço, o item aparece como "Consulte".
// `encomenda: true` marca itens feitos apenas sob encomenda.

export type ItemCardapio = {
  nome: string;
  descricao?: string;
  preco?: string;
  encomenda?: boolean;
};

export type CategoriaCardapio = {
  id: string;
  nome: string;
  itens: ItemCardapio[];
};

export const CARDAPIO: CategoriaCardapio[] = [
  {
    id: "paes",
    nome: "Pães",
    itens: [
      { nome: "Pão francês", descricao: "Crocante, saindo do forno várias vezes ao dia." },
      { nome: "Pão de forma caseiro", descricao: "Macio, ideal para o café da manhã." },
      { nome: "Pão doce", descricao: "Massa fofinha com cobertura açucarada." },
      { nome: "Rosca caseira", descricao: "Receita tradicional, perfeita para o café." },
    ],
  },
  {
    id: "bolos",
    nome: "Bolos & Tortas",
    itens: [
      { nome: "Fatia de bolo caseiro", descricao: "Sabores do dia no balcão." },
      { nome: "Bolo caseiro inteiro", descricao: "Milho, chocolate, laranja e mais." },
      {
        nome: "Bolo de aniversário",
        descricao: "Recheios e decoração personalizados.",
        encomenda: true,
      },
      { nome: "Torta doce", descricao: "Por fatia ou inteira.", encomenda: true },
    ],
  },
  {
    id: "doces",
    nome: "Doces",
    itens: [
      { nome: "Brigadeiro", descricao: "Tradicional e sabores especiais." },
      { nome: "Cupcake", descricao: "Com cobertura cremosa." },
      { nome: "Docinhos para festa", descricao: "Vendidos por cento.", encomenda: true },
    ],
  },
  {
    id: "salgados",
    nome: "Salgados",
    itens: [
      { nome: "Coxinha", descricao: "Massa leve e recheio caprichado." },
      { nome: "Salgado assado", descricao: "Opções do dia no balcão." },
      {
        nome: "Salgadinhos para festa",
        descricao: "Fritos ou assados, por cento.",
        encomenda: true,
      },
    ],
  },
];
