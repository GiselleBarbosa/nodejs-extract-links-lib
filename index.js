import chalk from "chalk";
import { error } from 'console';
import fs from "fs";

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não existe arquivo no diretório"));
}

/* function pegaArquivo(caminhoDoArquivo){
const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if(erro) {
      trataErro(erro)
    }
    console.log(chalk.green(texto));
    
  })
} */

function pegaArquivo(caminhoDoArquivo) {
	const encoding = "utf-8";
	fs.promises
		.readFile(caminhoDoArquivo, encoding)
		.then(texto => console.log(chalk.green(texto)))
		.catch( trataErro());
}

pegaArquivo("./arquivos/texto.md");
