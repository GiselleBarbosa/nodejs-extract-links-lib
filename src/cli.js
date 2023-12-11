import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto() {
	const resultado = await pegaArquivo(caminho[2]);
	console.log(chalk.yellow("lista de links"), resultado);
}

processaTexto(caminho);
