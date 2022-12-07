// script usado para contar as palavra nos livros da Biblia.
// script feitos no navegador.
let regexs = {
  palavraPortugues: /[A-zÀ-Ú-]+/gmi
}

let bible = JSON.parse(document.body.innerText)

let livro = bible.map(book => book.chapters.join(' ')).join(' ')
let palavras = livro.match(regexs.palavraPortugues).map(c => c.toLowerCase())

let livros = bible.map(book => book.chapters.join(' ')
                       .replace(/"/gi,"")
                       .replace(/,,/gm, " ")
                       .replace(/\.,/gi," ")
                       .replace(/\:,/gm, " ")
                       .replace(/\:/gm, "")
                       .replace(/\. /gm, " ")
                       .replace(/\, /gm, " ")
                       .replace(/\; /gm, " ")
                       .replace(/\! /gm, " ")
                       .replace(/\? /gm, " ")
                       .replace(/\, /gm, " ")
                       .replace(/ \,/gm, " ")
                       .replace(/\./gm, "")
                       .replace(/  /gm, " ")
                       .replace(/\,/gm, " ")
                       .replace(/ ‘/gm, " ")
                       .replace(/ ’ /gm, " ")
                       .replace(/!/gm, " ")
                      )

let livroCompleto = livros.join(' ').replace(/  /gm, " ");
let palavras = livroCompleto.split(' ');

let quantidadePalavras = palavras.reduce(function (todosPalavras, palavra) {
  if (palavra in todosPalavras) {
    todosPalavras[palavra]++;
  }
  else {
    todosPalavras[palavra] = 1;
  }
  return todosPalavras;
}, {});

let stringGroup = JSON.stringify(quantidadePalavras, null, null);

console.log(stringGroup)

