import { Link } from "react-router-dom";

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImg = `/src/assets/heroes/${id}.jpg`;

	return (
		<div className="col animate__animated animate__fadeIn">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4 ">
						<img
							src={heroImg}
							className="card-img"
							alt={superhero}
						/>
					</div>
					<div className="col-8">
						<h5 className="card-title">{superhero}</h5>
						<p className="card-text">{alter_ego}</p>

						<Link to={`/hero/${id}`}>ver mas...</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
