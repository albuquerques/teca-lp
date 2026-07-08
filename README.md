# TECA SBC — Landing Page

Landing page do curso **TECA (Treinamento em Emergências Cardiovasculares)** da MedSafe Brasil, em parceria com a Sociedade Brasileira de Cardiologia (SBC).

## Estrutura

Site **estático** de arquivo único, sem etapa de build:

- `index.html` — página completa
- `support.js` — runtime de renderização (carrega React/ReactDOM/Babel via CDN em runtime)
- `_ds/` — design system (tokens, estilos e bundle de componentes)
- `assets/` — imagens (logos, fotos dos professores, ebook, backgrounds)

## Rodar localmente

Precisa ser servido por HTTP (não abrir via `file://`), pois o runtime faz `fetch` do próprio HTML:

```bash
python -m http.server 8080
# abrir http://localhost:8080/
```

## Deploy (Vercel)

Configurado em `vercel.json` como site estático (`framework: null`, sem build, `outputDirectory: "."`). A Vercel apenas serve os arquivos da raiz.
