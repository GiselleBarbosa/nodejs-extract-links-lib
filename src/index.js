import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
	const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

	const capturas = [...texto.matchAll(regex)];
	const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }));
	return resultados.length !== 0
		? resultados
		: "Não foram encontrados links no arquivo. ";
}

async function pegaArquivo(caminhoDoArquivo) {
	try {
		const encoding = "utf-8";
		const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
		return extraiLinks(texto);
	} catch (erro) {
		trataErro(erro);
	}
}

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não existe arquivo no diretório"));
}

export default pegaArquivo;
