# Video Streaming

Este é o projeto de frontend de uma página de streming de video, inspirada em algumas plataformas como, Netflix e Disney Plus.

O objetivo principal desse projeto é implementar features que acho interessantes nas diferentes plataformas, utilizando React.

Este não é um projeto clone de nenhuma plataforma em particular.

## Rodar o projeto localmente com Docker

Clone o projeto entre no diretório e execute

> docker-compose build

Após o build, suba o projeto com

> docker-compose up

Acesse o projeto em `localhost:3001`

Rode os testes com

> docker-compose run --rm app yarn spec

Rode o linter com

> docker-compose run --rm app yarn lint

e para possiveis correções do linter use

> docker-compose run --rm app yarn lintFix
