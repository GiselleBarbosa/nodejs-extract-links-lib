import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
	const regex = /\[([^[\]]*?)\]\((http?s:\/\/[^\s?#.].[^\s]*\))/gm;
	const capturas = [...texto.matchAll(regex)];
	const resultados = capturas.map(captura => ({ [captura[1]]: [captura[2]] }));
	return resultados;
}

async function pegaArquivo(caminhoDoArquivo) {
	try {
		const encoding = "utf-8";
		const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
		console.log(extraiLinks(texto));
	} catch (erro) {
		trataErro(erro);
	}
}

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não existe arquivo no diretório"));
}

pegaArquivo("./arquivos/texto.md");