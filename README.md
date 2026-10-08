# Universidade Master Educação — Site Institucional

Aplicação web completa e responsiva desenvolvida com **Next.js (App Router)** + **Tailwind CSS** para a Universidade Master Educação.

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Estilização**: Tailwind CSS v4
- **Ícones**: Lucide React
- **Linguagem**: TypeScript
- **Deploy**: Vercel (pronto)

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css          # Estilos globais + design tokens
│   ├── layout.tsx           # Layout raiz (SEO + Provider)
│   ├── page.tsx             # Página principal
│   └── admin/
│       └── page.tsx         # Painel administrativo
├── components/
│   ├── Header.tsx           # Cabeçalho responsivo + WhatsApp flutuante
│   ├── HeroSection.tsx      # Hero com badges de aceleração
│   ├── DifferentialsSection.tsx  # Diferenciais da instituição
│   ├── CategoriesSection.tsx     # Grade de categorias de cursos
│   ├── EnrollmentForm.tsx   # Formulário de matrícula em 4 passos
│   ├── AdminPanel.tsx       # Painel CRUD de cursos
│   └── Footer.tsx           # Rodapé completo
├── contexts/
│   └── CoursesContext.tsx   # Estado global + persistência localStorage
└── lib/
    └── courses-data.ts      # Dados, tipos e utilitários
```

## 🏃 Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## 🔐 Área Administrativa

Acesse `/admin` com a senha: **master2025**

> **Importante**: Altere a senha no arquivo `src/components/AdminPanel.tsx` (constante `ADMIN_PIN`) antes de colocar em produção.

## 📲 Configuração do WhatsApp

No arquivo `src/lib/courses-data.ts`, altere:

```ts
const WHATSAPP_NUMBER = "5511999999999"; // ← Número real aqui
```

## 🌐 Deploy na Vercel

1. Faça `git push` para o GitHub
2. Importe o repositório na [Vercel](https://vercel.com)
3. Deploy automático em cada `git push`

## 📚 Categorias de Ensino

1. Cursos de Evolução / Progressão Funcional
2. Cursos de Aperfeiçoamento ou Atualização
3. Ensino Médio (Aceleração / EJA)
4. Cursos Técnicos
5. Cursos Sequenciais
6. Cursos Superiores de Tecnologia (Tecnólogos)
7. Cursos Superiores de Bacharelado
8. Cursos Superiores de Licenciatura
9. Pós-Graduação e MBA

---

© Universidade Master Educação
