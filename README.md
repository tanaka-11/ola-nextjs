# Anotações Gerais Next.js

Next.js é um framework Fullstack, que permite criar aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `SSR - Server Side Rendering`.

Para criar e navegar por páginas na aplicação Next.js, basta criar componentes no diretório `pages` que automaticamente elas estarão disponíveis para navegação através de rotas.

## Sobre o arquivo \_app.js e \_document.js

Arquivo de configuração global para personalizar o comportamento da aplicação Next.js.

---

### \_app.js

- Adicionar componentes globais ao app.
- Pode ser utilizado para layout e styles globais.
- Tem finalidade semelhante ao App.js do React (arquivo de inicialização).
- Renderizado no Client e no Server.

### \_document.js

- Usado para personalizar o HTML em todas as páginas em relação ao <head>.
- Pode ser utilizado para meta tags, scripts, styles globais.
- Renderizado no Server.
