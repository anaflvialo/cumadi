<img src="/mobile/src/assets/Logo-redondo-cumadi.png" height="150" width="150" />

<h1>Cumadi</h1>

<p>O Cumadi é um app focado em fazer companhia para idosos, no qual é possível ler boas notícias ao redor do mundo e conversar com a comadre virtual Beni. Este projeto foi desenvolvido durante o hackathon Call for Code.</p>

<h3>Assistente Virtual</h3>
<p>Para a criação da comadre virtual Beni foi utilizado o serviço <b>IBM Watson Assistant</b> (https://www.ibm.com/cloud/watson-assistant/). As habilidades foram configuradas de modo que a assistente pudesse responder perguntas do tipo "Como fazer uma ligação pelo WhatsApp?", qual o número de determinado canal de televisão e algumas sugestões de filmes e músicas. As habilidades programadas podem ser visualizadas no arquivo <b>'skill-Cumadi-virtual.json'</b> </p>

<h3>App</h3>
<p>O app foi criado com Expo (https://expo.io/), que é uma plataforma de código aberto para criar aplicativos nativos universais para Android, iOS e web com JavaScript e React.</p>

<p>A integração da assistente com o app foi feita utilizando a ferramenta <b>Node-RED App</b>, disponível na <b>IBM Cloud</b> (https://cloud.ibm.com). Após criado o serviço, o link de integração foi inserido no arquivo 'Bot.js', disponível no caminho '/mobile/src/pages/Bot.js'.</p>

<p>O arquivo <a href='https://github.com/anaflvialo/cumadi/blob/master/mobile/src/routes.js'>routes.js</a> contém a especificação das rotas para a navegação entre telas dentro do app.</p>

<p>O arquivo <a href='https://github.com/anaflvialo/cumadi/blob/master/mobile/src/services/api.js'>api.js</a> contém a integração com o backend. </p>

<p>Em <a href='https://github.com/anaflvialo/cumadi/tree/master/mobile/src/pages'>pages</a> é possível visualizar o código de cada página criada, sendo Login a página de Login, Index a página inicial, News a página com todas as notícias, CompleteNews a página com uma notícia específica e Bot sendo a página de interação com a assistente virtual.</p>

<p>O arquivo <a href='https://github.com/anaflvialo/cumadi/blob/master/mobile/src/components/NewsList.js'>NewsList.js</a>, contém a componentização utilizada nas notícias na página 'News'.</p>

<h3>Backend</h3>

<p>O arquivo <a href='https://github.com/anaflvialo/cumadi/blob/master/backend/src/server.js'>server.js</a> contém a conexão com o banco de dados criado e o arquivo <a href='https://github.com/anaflvialo/cumadi/blob/master/backend/src/routes.js'>routes.js</a> contém as rotas das requisições utilizadas.</p>

<p>Em <a href='https://github.com/anaflvialo/cumadi/tree/master/backend/src/models'>models</a> estão os arquivos com a especificação dos atributos dos modelos de usuário e notícia. Em <a href='https://github.com/anaflvialo/cumadi/tree/master/backend/src/controllers'>controllers</a> estão os arquivos para criação de usuários e notícias, os quais utilizam os <i>Schemas</i> criados em models.</p>

