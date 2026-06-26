# Flora Velas — Portfolio Interativo

Projeto final do segundo periodo — Sistemas para Internet, IFTO campus Palmas.

Portfolio interativo para a **Flora Velas**, empresa artesanal de velas aromaticas, sprays e difusores.

---

## Tecnologias

| Tecnologia | Versao | Descricao |
|---|---|---|
| Vue 3 | ^3.5 | Framework JavaScript progressivo |
| Vite | ^8.0 | Build tool e dev server |
| @lucide/vue | ^1.20 | Biblioteca de icones |
| CSS Custom Properties | — | Variaveis CSS para identidade visual |

---

## Estrutura do Projeto

```
flora-velas/
├── public/
│   ├── images/         
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavBar.vue
│   │   │   └── FooterBar.vue
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── SobreSection.vue
│   │       ├── ProdutosSection.vue
│   │       ├── PlaylistSection.vue
│   │       └── ContatoSection.vue
│   ├── composables/
│   │   └── useScrollAnimation.js
│   ├── data/
│   │   └── products.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.js
└── package.json
```

---

## Como rodar localmente

```bash
# Instalar dependencias
pnpm install

# Rodar em modo desenvolvimento
pnpm dev

# Gerar build de producao
pnpm build

# Pre-visualizar build
pnpm preview
```

---

## Funcionalidades

- Design responsivo (mobile, tablet, desktop)
- Navegacao suave com scroll
- Filtro de produtos por categoria
- Tags de objetivo (Foco, Sono, Energia)
- Modal de detalhes dos produtos
- Animacoes de entrada ao rolar a pagina
- Secao de playlists Spotify
- Formulario de contato com validacao
- Botao flutuante do WhatsApp
- Links para Instagram e WhatsApp

---

