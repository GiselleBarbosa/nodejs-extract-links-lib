function extraiLinks(arrayLinks) {
	// return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
	const links = arrayLinks.flatMap(Object.values);
	return links;
}

async function checaStatus(listaURLs) {
	const arrayStatus = await Promise.all(
		listaURLs.map(async url => {
			const response = await fetch(url);
			return response.status;
		})
	);

	return arrayStatus;
}

export default async function listaValidada(listaDeLinks) {
	const links = extraiLinks(listaDeLinks);
	const status = await checaStatus(links);
	return status;
}

// [gatinho salsicha](http://gatinhosalsicha.com.br/)
