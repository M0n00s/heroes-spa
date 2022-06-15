import { getHeroByPublisher } from "../helper/getHeroByPublisher";

export const HeroList = ({ publisher }) => {
	const heroes = getHeroByPublisher(publisher);
	return (
		<ul>
			{heroes.map((heroe) => (
				<li key={heroe.id}>{heroe.id}</li>
			))}
		</ul>
	);
};
