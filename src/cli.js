import chalk from "chalk";
import fs from "fs";
import listaValidada from "./http-validacao.js";
import pegaArquivo from "./index.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = "") {
	if (valida) {
		console.log(
			chalk.yellow("lista validada"),
			chalk.black.bgGreen(identificador),
			await listaValidada(resultado)
		);
	} else {
		console.log(
			chalk.yellow("lista de links"),
			chalk.black.bgGreen(identificador),
			resultado
		);
	}
}

async function processaTexto(argumentos) {
	const caminho = argumentos[2];
	const valida = argumentos[3] === "--valida";

	console.log(valida);

	try {
		fs.lstatSync(caminho);
	} catch (erro) {
		if (erro.code === "ENOENT") {
			console.log(chalk.red("Arquivo ou diretório não existe."));
			return; // o objeto de erro para de exibir os detalhes e exibe apenas o erro do console.log
		}
	}

	if (fs.lstatSync(caminho).isFile()) {
		const resultado = await pegaArquivo(argumentos[2]);
		imprimeLista(valida, resultado);
	} else if (fs.lstatSync(caminho).isDirectory()) {
		const arquivos = await fs.promises.readdir(caminho);
		arquivos.forEach(async nomeArquivo => {
			const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
			imprimeLista(valida, lista, nomeArquivo);
		});
	}
}

processaTexto(caminho);
