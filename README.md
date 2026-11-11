# Dr. André Almeida — Landing Page

Landing page institucional do **Dr. André Almeida**, com foco na apresentação do médico, especialidades, depoimentos e solicitação de agendamento.

**Site publicado:** [https://drandrealmeida.netlify.app](https://drandrealmeida.netlify.app)

> **Repositório público.** Projeto de portfólio / demonstração: textos, nome, CRM, telefone, endereço e depoimentos são fictícios e não representam um profissional ou consultório real. A identidade visual foi criada para fins de estudo e apresentação de UI.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- [Vercel Analytics](https://vercel.com/analytics) (apenas em produção)
- [Yarn 4](https://yarnpkg.com/)

Tipografia: **Arial** para textos e **Georgia** para títulos.

## Pré-requisitos

- Node.js 20+
- [Yarn 4](https://yarnpkg.com/) (gerenciador definido no projeto)

Caso necessário, habilite o Corepack:

```bash
corepack enable
```

## Como rodar

```bash
# Instalar dependências
yarn install

# Servidor de desenvolvimento (http://localhost:3000)
yarn dev

# Build de produção
yarn build

# Servir build localmente
yarn start
```

## Estrutura do projeto

```text
app/
  layout.tsx                 # Layout global e metadados
  page.tsx                   # Composição da landing page
  globals.css                # Cores, estilos base e animações
components/
  site-header.tsx            # Cabeçalho e navegação
  hero-section.tsx
  trust-bar-section.tsx
  about-section.tsx
  services-section.tsx
  testimonials-section.tsx
  appointment-section.tsx
  site-footer.tsx
  reveal.tsx                 # Animações acionadas pelo scroll
  ui/                        # Componentes de interface
public/
  doctor-portrait.png        # Foto demonstrativa
  medical-heart.png          # Identidade visual
  apple-icon.png             # Ícone Apple
lib/
  utils.ts                   # Utilitários (ex.: cn)
```

## Seções da página

| Seção | Âncora |
| --- | --- |
| Início | `#inicio` |
| Sobre o doutor | `#sobre` |
| Especialidades | `#servicos` |
| Depoimentos | `#depoimentos` |
| Agendamento | `#agendamento` |
| Contato | `#contato` |

## Identidade visual

A marca utiliza o coração com pulso ECG disponível em `public/medical-heart.png`. O arquivo é usado no cabeçalho, rodapé, especialidade de clínica geral e favicon.

### Favicon e app icon

| Arquivo | Uso |
| --- | --- |
| `medical-heart.png` | Favicon e identidade visual |
| `apple-icon.png` | Ícone Apple |

## Animações

O componente `components/reveal.tsx` usa `IntersectionObserver` para revelar os elementos durante a rolagem. São disponibilizadas animações de entrada vertical, horizontal e por opacidade, com atrasos sequenciais e suporte a `prefers-reduced-motion`.

## Deploy

Produção: [https://drandrealmeida.netlify.app](https://drandrealmeida.netlify.app) ([Netlify](https://www.netlify.com/)).

O projeto também é compatível com [Vercel](https://vercel.com/) e outras plataformas que suportam Next.js. O analytics é carregado automaticamente quando `NODE_ENV === 'production'`.

## Licença

Código aberto sob [MIT](LICENSE).

O campo `"private": true` no `package.json` apenas evita publicação acidental no npm; o repositório Git é **público**.

As imagens em `public/` fazem parte do material de demonstração. Reutilize o código, mas substitua os assets em projetos comerciais.
