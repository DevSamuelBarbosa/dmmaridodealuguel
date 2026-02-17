# 🔧 DM Marido de Aluguel - Landing Page

Landing page profissional e otimizada para SEO desenvolvida em Next.js 15 para serviços de "Marido de Aluguel" em Marau/RS e região.

## 🚀 Características

### ✨ Funcionalidades Principais
- **Design Moderno e Responsivo**: Interface limpa e profissional que funciona perfeitamente em todos os dispositivos
- **Componentes Modulares**: Arquitetura baseada em componentes reutilizáveis e organizados
- **Navegação Suave**: Scroll suave entre seções com links de âncora
- **Carrossel de Depoimentos**: Exibição aleatória de avaliações do Google Meu Negócio
- **Serviços Dinâmicos**: Lista randomizada de serviços que muda a cada reload
- **FAQ Interativo**: Perguntas frequentes com animações e design aprimorado
- **Integração WhatsApp**: Botões de contato direto via WhatsApp em múltiplos pontos

### 🎯 Otimizações de SEO

#### Meta Tags e Metadados
- ✅ Title e Description otimizados para busca local
- ✅ Keywords relevantes para serviços em Marau/RS
- ✅ Open Graph (Facebook, LinkedIn) configurado
- ✅ Twitter Card configurado
- ✅ Canonical URL definida
- ✅ Meta tags para dispositivos móveis (theme-color, mobile-app)

#### Dados Estruturados (Schema.org)
- ✅ **LocalBusiness**: Informações completas do negócio
- ✅ **PostalAddress**: Endereço detalhado com CEP
- ✅ **GeoCoordinates**: Localização precisa (latitude/longitude)
- ✅ **OpeningHours**: Horário de funcionamento
- ✅ **AggregateRating**: Avaliações (5 estrelas, 20 reviews)
- ✅ **OfferCatalog**: Catálogo de serviços estruturado
- ✅ **Area Served**: Área de atendimento definida

#### Arquivos de SEO
- ✅ **robots.txt**: Configurado para permitir indexação
- ✅ **sitemap.xml**: Sitemap dinâmico com todas as seções
- ✅ **manifest.json**: PWA manifest para instalação
- ✅ **404 personalizado**: Página de erro customizada

#### Performance
- ✅ Compressão automática ativada
- ✅ Otimização de imagens (AVIF, WebP)
- ✅ CSS otimizado (experimental)
- ✅ React Strict Mode
- ✅ Header X-Powered-By removido (segurança)

## 📁 Estrutura do Projeto

```
dmmaridodealuguel/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal com meta tags
│   ├── page.tsx              # Página principal
│   ├── sitemap.ts            # Sitemap dinâmico
│   └── not-found.tsx         # Página 404 personalizada
├── components/
│   ├── Header.tsx            # Cabeçalho com navegação
│   ├── Hero.tsx              # Seção hero
│   ├── Servicos.tsx          # Lista de serviços (randomizada)
│   ├── Depoimentos.tsx       # Carrossel de avaliações
│   ├── Faq.tsx               # Perguntas frequentes
│   ├── QuemSou.tsx           # Sobre o profissional
│   ├── Contato.tsx           # Informações de contato
│   ├── Footer.tsx            # Rodapé com links
│   └── JsonLd.tsx            # Dados estruturados Schema.org
├── data/
│   └── depoimentos.json      # Avaliações do Google
├── public/
│   ├── favicon.png           # Favicon arredondado
│   ├── icone_logo.jpg        # Logo
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # Diretivas para crawlers
│   └── servicos/             # Imagens de serviços
└── .env.local                # Variáveis de ambiente
```

## 🛠️ Tecnologias

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Estilização utilitária
- **FontAwesome**: Ícones
- **Geist Font**: Tipografia moderna

## 📋 Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP=5554984431383
NEXT_PUBLIC_EMAIL=dougbc2014@gmail.com
```

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### 4. Build para Produção

```bash
npm run build
npm start
```

## 🔍 Checklist de SEO para Deploy

### Antes do Deploy:

- [ ] **Verificar URL do site** em:
  - `app/layout.tsx` (canonical, openGraph.url)
  - `components/JsonLd.tsx` (url, @id)
  - `app/sitemap.ts` (baseUrl)
  - `public/robots.txt` (Sitemap URL)

- [ ] **Google Search Console**:
  - Adicionar propriedade do site
  - Verificar propriedade
  - Submeter sitemap (`/sitemap.xml`)
  - Adicionar código de verificação em `app/layout.tsx` (se necessário)

- [ ] **Google My Business**:
  - Vincular avaliações reais
  - Atualizar coordenadas GPS se necessário
  - Sincronizar horário de funcionamento

- [ ] **Redes Sociais**:
  - Adicionar links no `components/JsonLd.tsx` (sameAs)
  - Verificar Open Graph tags com [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Verificar Twitter Card com [Twitter Card Validator](https://cards-dev.twitter.com/validator)

- [ ] **Imagens**:
  - Otimizar imagens para web (compressão)
  - Adicionar imagens em múltiplos tamanhos
  - Verificar ALT text em todas as imagens

- [ ] **Performance**:
  - Testar com [PageSpeed Insights](https://pagespeed.web.dev/)
  - Testar mobile responsiveness
  - Verificar tempo de carregamento

- [ ] **Testes de SEO**:
  - [Google Rich Results Test](https://search.google.com/test/rich-results)
  - [Schema Markup Validator](https://validator.schema.org/)
  - Verificar sitemap em `/sitemap.xml`
  - Verificar robots.txt em `/robots.txt`

### Após o Deploy:

- [ ] Submeter sitemap no Google Search Console
- [ ] Verificar indexação do site no Google
- [ ] Monitorar posições no Google (palavras-chave locais)
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Google Tag Manager (opcional)

## 🎨 Personalização

### Cores (Tailwind)
As cores principais podem ser ajustadas em `app/globals.css` e nos componentes:
- Primary: `sky-600` (azul)
- Secondary: `orange-500` (laranja)
- Accent: `emerald-500` (verde)

### Conteúdo
- **Depoimentos**: Editar `data/depoimentos.json`
- **Serviços**: Editar listas em `components/Servicos.tsx`
- **FAQ**: Editar perguntas em `components/Faq.tsx`
- **Sobre**: Editar texto em `components/QuemSou.tsx`

### Logo e Favicon
- Substituir `/public/icone_logo.jpg` (logo)
- Substituir `/public/favicon.png` (favicon)
- Recomendado: 192x192px ou maior

## 📱 PWA (Progressive Web App)

O site está configurado para ser instalável como app:
- Manifest configurado em `/public/manifest.json`
- Ícones otimizados
- Theme color definido
- Offline-ready (após build de produção)

## 🔒 Segurança

- Header `X-Powered-By` removido
- Robots meta configurados
- HTTPS recomendado (obrigatório para PWA)
- Variáveis de ambiente para dados sensíveis

## 📊 Palavras-chave Target

### Principais:
- marido de aluguel Marau
- serviços gerais Marau RS
- manutenção residencial Marau
- DM Marido de Aluguel

### Secundárias:
- eletricista Marau
- encanador Marau
- pintor Marau
- reformas Marau
- instalações Marau

### Long-tail:
- marido de aluguel em Marau Rio Grande do Sul
- serviços de manutenção residencial Marau
- profissional de reparos domésticos Marau

## 📞 Contato

**Douglas Mello - DM Marido de Aluguel**
- 📱 WhatsApp: (54) 98443-1383
- 📧 E-mail: dougbc2014@gmail.com
- 📍 Marau/RS e região

## 📝 Licença

Este projeto é proprietário e desenvolvido especificamente para DM Marido de Aluguel.

---

**Desenvolvido com ❤️ e ⚡ Next.js**
