import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultado, identificador = '')  {
	console.log(
		chalk.yellow("lista de links"),
		chalk.black.bgGreen(identificador),
		resultado
	);
}

async function processaTexto(argumentos) {
	const caminho = argumentos[2];

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
		imprimeLista(resultado);
	} else if (fs.lstatSync(caminho).isDirectory()) {
		const arquivos = await fs.promises.readdir(caminho);
		arquivos.forEach(async nomeArquivo => {
			const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
			imprimeLista(lista, nomeArquivo);
		});
	}
}

processaTexto(caminho);
