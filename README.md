<h1>Introdução ao Next.js - O framework React</h1>

<h2>O que é o Next.js?</h2>

<p>O Next.js é um framework open source criado em cima do React para facilitar o desenvolvimento de aplicações web modernas e escaláveis.</p>

<p>Ele foi desenvolvido pela Vercel (antiga Zeit) e vem ganhando muita popularidade nos últimos anos, se tornando uma das principais escolhas para construir aplicações web com React.</p>

<p>O Next.js traz diversos recursos e otimizações que melhoram significativamente o desempenho, a experiência do usuário e o trabalho do desenvolvedor na hora de criar aplicações React.</p>

<p>Alguns dos benefícios do Next.js:</p>

<ul>
    <li>Renderização híbrida (SSR + SSG)</li>
    <li>Pré-renderização estática</li>
    <li>Roteamento automático</li>
    <li>Divisão de código</li>
    <li>Extensões de CSS e SASS integradas</li>
    <li>Suporte a TypeScript</li>
    <li>Fácil deploy</li>
    <li>E mais...</li>
</ul>

<p>Veremos cada um desses recursos em detalhes mais à frente.</p>

<h2>Por que usar Next.js?</h2>

<p>O React por si só já é uma biblioteca incrível para construir interfaces de usuário. Entretanto, ele resolve apenas uma parte do problema.</p>

<p>Ao construir aplicações React na web, ainda é necessário resolver diversos outros desafios, como:</p>

<ul>
    <li>Renderização do lado do servidor (SSR)</li>
    <li>Geração de sites estáticos (SSG)</li>
    <li>Roteamento</li><li>Divisão de código</li>
    <li>Build e deploy</li>
</ul>

<p>O Next.js entra justamente para resolver esses problemas e trazer uma experiência completa e otimizada para construir aplicações React, sem precisar se preocupar com configurações complexas.</p>

<p>Alguns dos principais motivos para utilizar Next.js:</p>

<h3><strong>Desempenho otimizado</strong></h3>

<p>O Next.js faz otimizações como pré-renderização, lazy loading de componentes e divisão automática de código para entregar o máximo de performance possível.</p>

<p>Sites criados com Next carregam extremamente rápido, melhorando significativamente a experiência do usuário.</p>

<h3><strong>Desenvolvimento facilitado</strong></h3>

<p>O Next traz vários recursos prontos que facilitam e aceleram o desenvolvimento, como roteamento automático, suporte a SASS/CSS, TypeScript e mais.</p>

<p>Não é preciso configurar tudo do zero ou instalar diversas bibliotecas. É possível construir aplicações complexas rapidamente.</p>

<h3><strong>SEO aprimorado</strong></h3>

<p>A renderização do lado do servidor (SSR) e geração estática de sites (SSG) que o Next.js traz por padrão melhora significativamente a otimização para mecanismos de busca, fundamental para o sucesso de produtos web.</p>

<h3><strong>Escalabilidade</strong></h3>

<p>O Next permite escalar aplicações grandes com facilidade, seja no tráfego, complexidade ou times de desenvolvimento maiores.</p><p>Ele tem recursos nativos para dividir o código em partes menores, permitindo um crescimento com qualidade.</p>

<h3><strong>Hospedagem simplificada</strong></h3>

<p>Fazer deploy de aplicações Next é muito simples. Basta um comando para publicar na Vercel ou em outros hosts compatíveis.</p><p>Não é preciso configurar servidores complexos. O Next se integra perfeitamente com as principais opções de hospedagem e entrega tudo pronto para produção.</p>

<h3><strong>Comunidade e suporte</strong></h3>

<p>Por ser open source e extremamente popular, o Next tem uma grande comunidade por trás, contribuindo com ideias, bibliotecas e soluções que enriquecem ainda mais o ecossistema.</p>

<p>Além disso, é fácil encontrar suporte e tirar dúvidas caso tenha algum problema.</p>

<h3><strong>Empresas que usam</strong></h3>

<p>Grandes empresas como Netflix, Uber, Twitch, GitHub e outras utilizam Next.js para entregar experiências incríveis com performance e escala.</p>

<p>Isso mostra a confiança no framework e como ele se mostra preparado para casos de uso complexos.</p>

<h2>Como o Next.js funciona?</h2>

<p>Antes de criarmos projetos e escrevermos código em Next.js, é importante entender como ele funciona por baixo dos panos.</p><p>O Next é um framework construído em cima do React, então tudo que você sabe sobre React continua valendo. Porém ele faz algumas alterações e implementa novos conceitos importantes.</p>

<p>Os principais:</p>

<h3><strong>Hidratação do React</strong></h3>

<p>O Next permite renderizar páginas HTML do lado do servidor e depois hidratar uma aplicação React no cliente, tornando a página interativa.</p>

<p>Isso melhora significativamente o desempenho inicial, pois o conteúdo é servido rapidamente em HTML puro, sem precisar esperar o JavaScript ser baixado e processado.</p>

<p>Depois o React assume e hidrata a página, transformando-a em uma SPA responsiva e com todas as funcionalidades de uma aplicação React.</p>

<h3><strong>Pré-renderização</strong></h3>

<p>Todas as páginas geradas pelo Next.js são pré-renderizadas por padrão, ou seja, renderizadas antecipadamente durante a build.</p><p>Isso permite que o conteúdo seja servido já renderizado do lado do servidor, sem precisar processar o JavaScript no cliente.</p><p>Existem dois tipos de pré-renderização no Next:</p>

<ul>
    <li><p><strong>Static Generation (SSG):</strong> O HTML é gerado no momento da build e reutilizado a cada requisição, sem precisar renderizar nada no servidor depois. Ideal para conteúdos que não mudam com frequência.</p></li>
    <li><p><strong>Server-side Rendering (SSR):</strong> O HTML é gerado no servidor a cada requisição. Ideal para conteúdos muito dinâmicos.</p></li>
</ul>

<p>O Next permite escolher qual tipo de renderização usar em cada página.</p>

<h3><strong>Roteamento automático</strong></h3>

<p>O Next tem um roteador integrado que funciona baseado no sistema de arquivos.</p>

<p>Ao criar uma página em <code>pages/sobre.js</code>, ela estará automaticamente disponível em <code>/sobre</code>.</p>

<p>Não é preciso configurar todas as rotas manualmente. Basta criar componentes de página e o Next cuida do roteamento.</p>

<h3><strong>Divisão de código</strong></h3>

<p>O Next permite dividir o código da aplicação em partes menores usando a função <code>dynamic</code>.</p>

<p>Dessa forma, só é carregado o que é necessário para cada página, acelerando o carregamento.</p>

<p>Também permite escalar times e projetos grandes com mais facilidade.</p>

<h3><strong>Recursos integrados</strong></h3>

<p>O Next traz recursos como roteamento, suporte a CSS, TypeScript e mais já configurados por padrão, sem precisar instalar outros pacotes.</p>

<p>Isso poupa muito trabalho de configuração e permite ser produtivo rapidamente.</p>

<h3><strong>Deploy simplificado</strong></h3>

<p>Publicar aplicações Next é muito simples. Basta executar um comando.</p>

<p>Ele permite fazer deploy em serviços como Vercel, Netlify e outros com facilidade e rapidez.</p>

<h2>Estrutura de pastas de um projeto Next.js</h2>

<p>Agora que dá para entender como o Next funciona internamente, conhecer a estrutura de pastas de um projeto:</p>

<ul>
    <li><p><strong>pages:</strong> Pasta com os components de página renderizados pelo Next. A organização de pastas gera as rotas automaticamente.</p></li>
    <li><p><strong>public:</strong> Arquivos estáticos públicos como imagens. Tudo que estiver aqui pode ser acessado publicamente.</p></li>
    <li><p><strong>styles:</strong> Pasta com arquivos CSS globais. Também permite SASS e outras extensões de CSS.</p></li>
    <li><p><strong>components:</strong> Componentes React compartilhados pela aplicação.</p></li>
    <li><p><strong>lib:</strong> Códigos JavaScript que não são components React, como funções auxiliares.</p></li>
    <li><p><strong>node_modules:</strong> Dependências instaladas (geradas automaticamente).</p></li>
</ul>

<p>Alguns arquivos importantes na raiz:</p>

<ul>
    <li><p><strong>_app.js:</strong> Componente raiz que envolve todas as páginas. Útil para compartilhar layouts, providers de estado e mais.</p></li>
    <li><p><strong>_document.js:</strong> Permite customizar o documento HTML raiz.</p></li>
    <li><p><strong>package.json:</strong> Manifesto com dependências e scripts do projeto.</p></li>
    <li><p><strong>next.config.js:</strong> Arquivo de configuração do Next.js.</p></li>
</ul>

<p>Essa é a estrutura básica de um projeto Next. Veremos cada pasta com mais detalhes quando formos criar o projeto na prática.</p><h2>Criando um projeto Next.js</h2>

<p>Agora que sabe-se o básico sobre o Next.js e sua estrutura, vamos colocar a mão na massa e criar um projeto do zero com ele.</p>

<h3>Iniciando projeto</h3>

<p>Para criar um projeto Next, vamos utilizar o npx que vem instalado com o Node.js:</p>

<pre><code>npx create-next-app@latest</code></pre>

<p>Esse comando vai baixar o template mais recente do Next e criar uma pasta com tudo configurado.</p><p>Depois é só escolher um nome para o projeto e aguardar ele instalar todas as dependências.</p>

<p>Com isso uma estrutura como a que vimos será criada com tudo pronto para começarmos a buildar nossas páginas.</p>

<h3>Pastas importantes</h3>

<p>Dentro da pasta <code>pages</code> é onde vamos construir nossas páginas e components que serão renderizados pelo Next.</p>

<p>Já dentro de <code>public</code> podemos colocar arquivos estáticos como imagens que precisam ser acessados de qualquer lugar.</p>

<p>E em <code>styles</code> podemos criar arquivos CSS globais ou configurar pré-processadores como SASS.</p>

<h3>Executando projeto</h3>

<p>Para rodar o projeto localmente, basta executar o comando:</p>

<pre><code>npm run dev</code></pre>

<p>Isso vai iniciar o servidor de desenvolvimento e já abrir automaticamente o projeto em <code>http://localhost:3000</code>.</p>

<p>Qualquer mudança que fizermos nos arquivos será atualizada em tempo real sem precisar reiniciar o servidor.</p>

<h3>Fazendo deploy</h3>

<p>Um dos grandes benefícios do Next é poder fazer deploy com um simples comando.</p>

<p>Basta executar:</p>

<pre><code>npm run buildnpm run start</code></pre>

<p>Isso vai gerar uma build de produção e iniciar um servidor otimizado para produção com as páginas estáticas pré-renderizadas.</p><p>Podemos inclusive hospedar esse build em serviços como Vercel ou Netlify com extrema facilidade e rapidez.</p>

<p>E assim temos um projeto Next totalmente funcional criado do zero e pronto para receber nossas páginas e componentes customizados.</p>

<h2>Criando uma aplicação do zero com Next.js</h2>

<p>Agora que já sabemos como criar e executar um projeto Next do zero, é hora de colocar a mão na massa e desenvolver uma aplicação completa para ver na prática como funciona.</p>

<h3>A aplicação</h3>

<p>Nessa seção vamos construir do zero uma aplicação de e-commerce básica, apenas para demonstrar na prática o desenvolvimento com Next.</p>

<p>Ela terá um catálogo de produtos, sistema de busca, páginas de produto, carrinho de compras e checkout básico.</p>

<p>Confira uma demo da aplicação final:</p>

<p><img src="demo-app.png" alt="Demo da aplicação" /></p>

<h3>Página Home</h3>

<p>A home será uma página estática com destaques de alguns produtos.</p>

<ol>
    <li><p>Dentro de <code>pages</code>, criamos um arquivo <code>index.js</code>.</p></li>
    <li><p>Populamos com um componente React básico:</p></li>
</ol>

<pre><code class="language-jsx">export default function Home() {  return &lt;div&gt;Olá Next.js&lt;/div&gt; }</code></pre>

<ol start="3">
    <li>Acessando a raiz, nossa mensagem aparecerá. O Next já configurou o roteamento para essa página automaticamente.</li>
</ol>

<h3>Layout base</h3>

<p>Antes de criarmos outras páginas, vamos construir um layout base com header e footer compartilhados.</p>

<ol>
    <li><p>Criamos <code>_app.js</code> na raiz do projeto.</p></li>
    <li><p>Movemos nossa markup base para esse componente. Ele será compartilhado por todas páginas.</p></li>
</ol>

<pre><code class="language-jsx">export default function MyApp({ Component, pageProps }) {  return (    &lt;&gt;      &lt;Header /&gt;      &lt;Component {...pageProps} /&gt;      &lt;Footer /&gt;    &lt;/&gt;  )}</code></pre>

<p>Assim temos um layout compartilhado sem repetição de código.</p><h3>Página de Produtos</h3><p>Agora vamos criar uma página com a lista de produtos.</p>

<ol>
    <li><p>Criamos <code>pages/products.js</code>.</p></li>
    <li><p>Populamos com uma lista estática de produtos.</p></li>
    <li><p>E adicionamos link para essa página no header.</p></li>
</ol>

<p>Com o roteamento automático, a página de produtos já estará acessível em <code>/products</code>.</p>

<h3>Página de Produto</h3>

<p>Mostraremos os detalhes de um único produto em uma página dinâmica.</p>

<ol>
    <li><p>Criamos um arquivo <code>pages/product/[id].js</code>.</p></li>
    <li><p>Recebemos o <code>id</code> pelo parâmetro da função.</p></li>
    <li><p>Buscamos os dados do produto no banco.</p></li>
    <li><p>Renderizamos os detalhes na tela.</p></li>
</ol>

<p>O colchete no nome cria uma rota dinâmica que recebe o <code>id</code> como parâmetro.</p>

<h3>Carrinho de Compras</h3>

<p>O carrinho ficará no header e controlaremos seu estado global com Context API do React.</p>

<ol>
    <li><p>Criamos os contexts <code>CartProvider</code> e <code>useCart</code>.</p></li>
    <li><p>Envolvemos <code>_app.js</code> com CartProvider para compartilhar o estado.</p></li>
    <li><p>Usamos o hook useCart em components que precisam controlar o carrinho.</p></li>
</ol>

<h3>Finalizando checkout</h3>

<p>Por fim, criamos uma página com formulário de checkout.</p>

<ol>
    <li><p>Criamos <code>pages/checkout.js</code>.</p></li>
    <li><p>Pedimos dados do comprador.</p></li>
    <li><p>Integramos com API de pagamento.</p></li>
    <li><p>Mostramos mensagem de sucesso.</p></li>
</ol>

<p>O estado do carrinho é compartilhado via contexto em toda a aplicação.</p>
<h3>Considerações finais</h3>
<p>E assim temos uma aplicação fullstack completa construída com Next.js!</p>
<p>Nesse processo, pudemos ver na prática como o Next facilita bastante todo o desenvolvimento e traz diversos benefícios, como:</p>

<ul>
    <li>Roteamento automático</li><li>SSR e SSG prontos</li>
    <li>Divisão de código</li><li>Integração com React</li>
    <li>E mais...</li>
</ul>

<p>Ele abstrai diversas complexidades do React puro e permite criar aplicações muito mais rápido e com menos bugs.</p><p>Espero que você tenha gostado do conteúdo! Qualquer dúvida, deixe nos comentários.</p>
