import { useMemo } from "react";
import { getHeroByPublisher } from "../helper/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
	return (
		<div className="row row-cols-1 row-cols-md-3 g-3">
			{heroes.map((heroe) => (
				<HeroCard key={heroe.id} {...heroe} />
			))}
		</div>
	);
};
