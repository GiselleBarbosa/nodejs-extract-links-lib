import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não existe arquivo no diretório"));
}

// async/await  
async function pegaArquivo(caminhoDoArquivo) {
  try {
     	const encoding = "utf-8";
      const texto = await fs.promises
		.readFile(caminhoDoArquivo, encoding)

    console.log(chalk.green(texto));
  }
  catch(erro) {
    trataErro(erro)
  }  
}

// pegaArquivo("./arquivos/texto.md");
// pegaArquivo("./arquivos/");


function extraiLinks(texto){
  const regex = /\[([^[\]]*?)\]\((http?s:\/\/[^\s?#.].[^\s]*\))/gm;
  const capturas = regex.exec(texto)
  console.log(capturas);
  
}

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

extraiLinks(textoTeste)

/* \[[^[\]]*?\] */

/* /\(http?s:\/\/[^\s?#.].[^\s]*\) */

//  regex unificado: 
// \[[^[\]]*?\]/\(http?s:\/\/[^\s?#.].[^\s]*\)

//  regex finalizado: 
// \[([^[\]]*?)\]\((http?s:\/\/[^\s?#.].[^\s]*\))

// regex apos selecao do flavor verificado pelo site : https://regex101.com/
// /\[([^[\]]*?)\]\((http?s:\/\/[^\s?#.].[^\s]*\))/gm;