
# 🚀 Projeto Labex 🚀

 Projeto individual, simulando uma aplicação que gerencia viagens espaciais. A aplicação tem diferentes funcionalidades que são integradas com a API Labex fornecida pela Labenu.

## Funcionalidades ⚙️

Área do usuário (viajante)
- Visualização das viagens programadas;
- Cadastro para aplicação em uma das viagens disponíveis;
Área do usuário (admin)
- Deletar viagens;
- Aprovar ou reprovar candidatos;
- Criar nova viagem;
- Visualizar os tripulantes da viagem

## Aprendizados 📝

Os principais desafios e aprendizados deste projeto foram referentes ao tamanho da estrutura, pela grande quatidade de páginas e funcionalidades que cada página contém.
Optei por separar o máximo possível as responsabilidades de cada arquivo dentro do código com as seguintes pastas:
- pages: onde estão as requisições que cada página precisava e chamada de componentes para montar a mesma;
- components: todos os componentes que seriam utilizados em mais de um local do projeto;
- hooks: com os hooks criados para auxiliar nas requisições;
- helpers: com as funções auxiliares para evitar a repetição de código;
- routes: com o arquivo de rotas das páginas
## Stack utilizada 💻

**Front-end:** React, Redux, ChackraUI, styled-components, axios, sweetAlert2, 

**Visualizar aplicação:** http://quarrelsome-screw.surge.sh/trips/application