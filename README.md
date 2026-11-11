# Landing Page — Clínica Dr. André Almeida

Landing page responsiva para uma clínica médica, desenvolvida com Next.js, React, TypeScript e Tailwind CSS.

## Funcionalidades

- Apresentação do médico e do consultório
- Lista de especialidades
- Depoimentos de pacientes
- Formulário de solicitação de agendamento
- Navegação por âncoras
- Layout responsivo para celulares, tablets e desktops
- Integração com Vercel Analytics em produção

## Tecnologias

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Yarn 4](https://yarnpkg.com/)

## Pré-requisitos

- Node.js 20 ou superior
- Corepack habilitado

```bash
corepack enable
```

## Como executar

Clone o projeto, acesse a pasta e instale as dependências:

```bash
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

```bash
yarn dev      # inicia o ambiente de desenvolvimento
yarn build    # gera a versão de produção
yarn start    # inicia a versão de produção
```

## Estrutura principal

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── about-section.tsx
├── appointment-section.tsx
├── hero-section.tsx
├── services-section.tsx
├── site-footer.tsx
├── site-header.tsx
├── testimonials-section.tsx
└── trust-bar-section.tsx

public/
├── doctor-portrait.png
└── medical-heart.png
```

## Personalização

Os textos, contatos, CRM, endereço, especialidades e depoimentos são demonstrativos. Antes da publicação, atualize essas informações nos arquivos dentro de `components/`.

As imagens utilizadas na página ficam na pasta `public/`.

## Produção

Gere e execute a versão otimizada:

```bash
yarn build
yarn start
```

O projeto também pode ser publicado diretamente na [Vercel](https://vercel.com/).
