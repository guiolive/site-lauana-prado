# Lauana Prado — Redesign do Site Oficial

Proposta de redesign do site oficial da cantora Lauana Prado.
Site atual roda em Wix (FCP ~4,5s, 138 recursos) — esta proposta reconstrói tudo em Next.js 15 com direção editorial cinematográfica.

## Stack

- **Next.js 15** · App Router, RSC
- **React 19** · TypeScript 5.7
- **CSS** próprio · sem framework
- Fontes: **Fraunces** (display, eixos variáveis WONK + SOFT), **Manrope** (corpo), **DM Mono** (tabular)

## Como rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

## Estrutura

```
app/
├── layout.tsx              metadata + carregamento de fontes
├── page.tsx                composição da home
├── globals.css             design system completo
└── components/
    ├── Nav.tsx             navegação fixa (server)
    ├── Hero.tsx            apresentação principal (server)
    ├── Sobre.tsx           biografia · papel-creme (server)
    ├── Lancamentos.tsx     discografia (server)
    ├── Videos.tsx          filmstrip YouTube · lazy (client)
    ├── Agenda.tsx          turnê tabular (server)
    ├── Loja.tsx            merch CTA (server)
    ├── Contato.tsx         booking + form (client)
    ├── Footer.tsx          fechamento (server)
    └── ClientScripts.tsx   IntersectionObserver + scroll-top (client)
```

## Direção criativa

Cartaz de turnê encontrando revista — fundo de tinta `#0A0907`, papel creme `#E9DFC7` em uma seção, ferrugem `#C44A1F` como acento único. Tipografia gigante, dados tabulares, listas longas no lugar de cards.

## Performance estimada

| Métrica           | Wix (atual) | Next.js (proposta) |
| ----------------- | ----------- | ------------------ |
| FCP               | ~4.5s       | ~0.9s              |
| Recursos / 1ª tela| 138         | ~24                |
| JS · gzip         | ~1.2 MB     | ~105 kB            |
| Lighthouse · perf | 38          | 96+                |

## Entregáveis incluídos

- `index.html` — versão estática equivalente (referência)
- `_proposta/proposta.html` — proposta editorial em A4 (12 páginas)
- `_proposta/site-to-pdf.mjs` — script Puppeteer pra exportar o site rodando como PDF
- `proposta-lauana-prado.pdf` — proposta renderizada
- `site-lauana-prado.pdf` — captura completa do site em PDF

## Licença

Projeto exploratório, não-oficial.
