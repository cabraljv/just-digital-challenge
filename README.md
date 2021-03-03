# Just Digital Challenge

## Demo

Para visualizar uma demo basta clicar <a href="https://cabraljv.github.io/just-digital-challenge/">aqui</a>


## Como executar

Para rodar com o docker, basta:
```sh
docker build . -t justchallenge:dev # Para criar a imagem a partir do Dockerfile


docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm justchallenge:dev # Para rolar efetivamente o container
```
O site ficará disponível em http://localhost:3001

Para rodar com o npm ou yarn, basta:
```sh
# Com o npm
npm install
npm run start

# Com o yarn
yarn
yarn start
```
O site ficará disponível em http://localhost:3000


## Como rodar os testes

Para rodar os testes basta:
```sh
# Com o npm
npm install
npm run test

# Com o yarn
yarn
yarn test
```



> Projeto desenvolvido por João Victor Cabral como parte do processo seletivo da Just Digital
