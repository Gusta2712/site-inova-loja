/* =========================================================
   Dados do site — Nova Informática
   Substitua os itens de PRODUCTS pelos produtos reais da loja
   (ou plugue aqui uma chamada para o seu sistema/planilha).
   ========================================================= */

const CATEGORIES = [
  {
    slug: "acessorios-celular",
    name: "Acessórios para Celular",
    short: "Capas, películas, suportes e carregadores.",
    icon: "phone"
  },
  {
    slug: "acessorios-tv",
    name: "Acessórios para TV",
    short: "Suportes, controles, cabos HDMI e conversores.",
    icon: "tv"
  },
  {
    slug: "conectividade",
    name: "Conectividade",
    short: "Roteadores, adaptadores Wi-Fi e cabos de rede.",
    icon: "wifi"
  },
  {
    slug: "energia",
    name: "Energia",
    short: "Nobreaks, estabilizadores, filtros de linha.",
    icon: "plug"
  },
  {
    slug: "ferramentas",
    name: "Ferramentas",
    short: "Kits para manutenção de notebooks e desktops.",
    icon: "tool"
  },
  {
    slug: "games",
    name: "Games",
    short: "Controles, headsets e acessórios gamer.",
    icon: "gamepad"
  },
  {
    slug: "hardware",
    name: "Hardware",
    short: "Placas, memórias, SSDs e componentes.",
    icon: "cpu"
  },
  {
    slug: "perifericos",
    name: "Periféricos",
    short: "Teclados, mouses, webcams e headsets.",
    icon: "mouse"
  },
  {
    slug: "seminovos",
    name: "Seminovos",
    short: "Notebooks e desktops revisados com garantia.",
    icon: "recycle"
  },
  {
    slug: "telefonia-fixa",
    name: "Telefonia Fixa",
    short: "Aparelhos e acessórios para telefonia fixa.",
    icon: "landline"
  }
];

/* Produtos de exemplo — troque nome/preço/categoria pelos reais.
   "img" fica em branco de propósito: sem foto real ainda,
   o card exibe um ícone no lugar (ver product-card__thumb). */
const PRODUCTS = [
  { name: "Suporte de Celular para Retrovisor", cat: "acessorios-celular", price: 29.0, tag: "Mais vendido" },
  { name: "Suporte Veicular It.Blue LE-016", cat: "acessorios-celular", price: 29.0 },
  { name: "Capa Anti-impacto Universal", cat: "acessorios-celular", price: 39.9 },
  { name: "Película de Vidro 3D", cat: "acessorios-celular", price: 19.9 },

  { name: "Suporte de Parede para TV 32-65\"", cat: "acessorios-tv", price: 89.9, tag: "Promoção" },
  { name: "Cabo HDMI 2.0 3 Metros", cat: "acessorios-tv", price: 34.9 },
  { name: "Controle Universal para TV", cat: "acessorios-tv", price: 24.9 },
  { name: "Conversor Digital para TV", cat: "acessorios-tv", price: 79.9 },

  { name: "Roteador Wi-Fi AC1200", cat: "conectividade", price: 149.0, tag: "Mais vendido" },
  { name: "Adaptador Wi-Fi USB", cat: "conectividade", price: 45.0 },
  { name: "Cabo de Rede Cat6 5m", cat: "conectividade", price: 22.0 },
  { name: "Repetidor de Sinal Wi-Fi", cat: "conectividade", price: 99.0 },

  { name: "Nobreak 1200VA Bivolt", cat: "energia", price: 399.0, tag: "Mais vendido" },
  { name: "Estabilizador 500VA", cat: "energia", price: 129.0 },
  { name: "Filtro de Linha 6 Tomadas", cat: "energia", price: 39.9 },
  { name: "Carregador Universal Notebook", cat: "energia", price: 79.9 },

  { name: "Kit Chaves de Precisão", cat: "ferramentas", price: 49.9 },
  { name: "Pasta Térmica para Processador", cat: "ferramentas", price: 24.9 },
  { name: "Sugador de Solda", cat: "ferramentas", price: 18.9 },
  { name: "Multímetro Digital", cat: "ferramentas", price: 69.9 },

  { name: "Headset Gamer 7.1", cat: "games", price: 159.0, tag: "Promoção" },
  { name: "Controle sem Fio para PC/Console", cat: "games", price: 129.0 },
  { name: "Mousepad Gamer Extra Grande", cat: "games", price: 49.9 },
  { name: "Cadeira Gamer Reclinável", cat: "games", price: 899.0 },

  { name: "SSD 480GB SATA III", cat: "hardware", price: 219.0, tag: "Mais vendido" },
  { name: "Memória RAM 8GB DDR4", cat: "hardware", price: 189.0 },
  { name: "Placa de Vídeo GTX 1650", cat: "hardware", price: 899.0 },
  { name: "Fonte ATX 500W 80 Plus", cat: "hardware", price: 259.0 },

  { name: "Teclado e Mouse sem Fio", cat: "perifericos", price: 99.0 },
  { name: "Webcam Full HD", cat: "perifericos", price: 149.0, tag: "Promoção" },
  { name: "Mouse Óptico USB", cat: "perifericos", price: 29.9 },
  { name: "Headset com Microfone", cat: "perifericos", price: 59.9 },

  { name: "Notebook i5 8GB Seminovo", cat: "seminovos", price: 1899.0, tag: "Garantia 90 dias" },
  { name: "Desktop Completo Seminovo", cat: "seminovos", price: 1299.0, tag: "Garantia 90 dias" },
  { name: "Monitor 19\" Seminovo", cat: "seminovos", price: 349.0 },
  { name: "Notebook i3 4GB Seminovo", cat: "seminovos", price: 1199.0 },

  { name: "Telefone com Fio Padrão", cat: "telefonia-fixa", price: 49.9 },
  { name: "Telefone sem Fio Digital", cat: "telefonia-fixa", price: 119.0 },
  { name: "Bina para Duas Linhas", cat: "telefonia-fixa", price: 89.9 },
  { name: "Cabo Telefônico 10m", cat: "telefonia-fixa", price: 14.9 }
];

const STORE = {
  name: "Nova Informática",
  tagline: "Sua loja de PCs, notebooks e acessórios gamers",
  whatsapp: "5519981678544",
  phones: ["(19) 3307-5457", "(19) 3307-5458"],
  email: "atendimento@novainformatica.net.br",
  address: "Rua Barão de Jaguara, 1037 — Centro, Campinas/SP",
  hours: ["Seg. a Sex.: 9h às 18h", "Sáb.: 9h às 13h"],
  social: {
    instagram: "https://www.instagram.com/novainformaticacampinas/",
    facebook: "https://www.facebook.com/NovaInformaticaCampinas"
  }
};
