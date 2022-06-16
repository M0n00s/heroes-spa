import { heroes } from "../data/heroes";

export const getHeroByNAme = (name = "") => {
	const nameSet = name.toLocaleLowerCase().trim();
	if (nameSet.length === 0) return [];

	return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
