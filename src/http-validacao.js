function extraiLinks(arrayLinks) {
	// return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
	const links = arrayLinks.flatMap(Object.values);
	return links;
}

export default function listaValidada(listaDeLinks) {
	return extraiLinks(listaDeLinks);
}
