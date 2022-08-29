## Boas vindas ao repositório do projeto Arte com Pixels!

Projeto realizado durante o curso de Desenvolvimento Web pela [Trybe]( https://www.betrybe.com/). O objetivo é desenvolver um quadro composto por pixels e uma paleta de cores. O usuário poderá pintar o quadro com a cor que ele tiver selecionado na paleta.

Essa página foi desenvolvida utilizando HTML, CSS e JavaScript.
Testes no cypress fornecidos pela Trybe.

---

## Habilidades

- Manipular o DOM
- Manipular o Javascript


---


## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.


---

## Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

*Testes no Cypres inbtegarlmente fornecidos pela Trybe.

---
## Demo

Link para o [Site](https://evandrvalente.github.io/pixels-art/)
