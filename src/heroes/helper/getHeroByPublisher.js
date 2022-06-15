import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {
	const validPublisher = ["Marvel Comics", "DC Comics"];
	if (!validPublisher.includes(publisher)) {
		throw new Error(`${publisher} no es un publisher valido`);
	}

	return heroes.filter((heroe) => heroe.publisher === publisher);
};
