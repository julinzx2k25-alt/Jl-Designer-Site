# JL DESIGN — Site de portfólio

Site estático (HTML, CSS e JavaScript). Não precisa instalar nada.

## Estrutura
- `index.html` — página principal
- `css/style.css` — estilos
- `js/main.js` — animações, filtros e visualização dos projetos
- `assets/img/` — logo e artes do portfólio

## Como ver no computador
Dê dois cliques em `index.html`. As animações e as fontes precisam de internet (GSAP e Google Fonts são carregados online).

## Como colocar no ar (grátis)
- **Netlify Drop:** acesse app.netlify.com/drop e arraste esta pasta.
- **GitHub Pages** ou **Vercel:** envie a pasta para um repositório e ative a publicação.

## Como adicionar um novo projeto
1. Coloque a imagem (JPG, ~800 px de largura) em `assets/img/`.
2. No `index.html`, copie um bloco `<figure class="it" ...>` dentro de `<div class="gl">` e troque a imagem, o título e a categoria.
3. O atributo `data-c` define os filtros: `esp` (Design Esportivo), `id` (Identidade Visual), `card` ou `sp` (Artes Digitais), `soc` (Redes Sociais). Pode usar mais de um, separados por espaço.

## Contatos usados no site
- Instagram: https://www.instagram.com/jl_design_01/
- Behance: https://www.behance.net/juliocesar666
- WhatsApp: +55 75 9970-8879 (link em `index.html`, procure por `wa.me`)
