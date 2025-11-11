# GGAPP — Site estático

Este repositório contém um site estático moderno da **Gerência Geral de Avaliação de Políticas Públicas (GGAPP)**.

## Como publicar na Netlify + GitHub

1. Crie um repositório no GitHub e envie estes arquivos (raiz: `index.html`, `styles.css`, `script.js`, pasta `assets/`).
2. No site da Netlify, clique em **Add new site > Import an existing project** e conecte ao seu repositório.
3. Build settings:
   - Framework: **Nenhum (site estático)**
   - Build command: *(deixe em branco)*
   - Publish directory: **/** (raiz do repositório)
4. Deploy. A Netlify vai gerar uma URL. Opcional: configure domínio próprio.
5. Formulário: já está pronto para Netlify Forms (`data-netlify="true"`). As submissões aparecem no painel da Netlify.

## Alternativa: GitHub Pages
- Vá em **Settings > Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.

## Editar conteúdo
- Troque textos em `index.html` (seções Missão, Visão & Valores, Metodologia, Projetos e Publicações).
- Substitua `assets/logo.png` pela sua logo (manter o mesmo nome facilita).
