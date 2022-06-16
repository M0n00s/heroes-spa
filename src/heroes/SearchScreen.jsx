import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "./components/HeroCard";
import { getHeroByNAme } from "./helper/getHeroByNAme";

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = "" } = queryString.parse(location.search);
	const heroes = getHeroByNAme(q);

	const [searchText, setSearchText] = useState(q);
	const handleInput = ({ target }) => {
		setSearchText(target.value);
	};

	const onSearchSubmit = (e) => {
		e.preventDefault();
		// if (searchText.trim().length <= 1) return;
		navigate(`?q=${searchText.toLocaleLowerCase()}`);
	};

	return (
		<div className="row">
			<div className="col-5">
				<h4>Searching</h4>
				<hr />
				<form onSubmit={onSearchSubmit}>
					<input
						type="text"
						placeholder="search a hero"
						className="form-control"
						name="searchText"
						value={searchText}
						onChange={handleInput}
						autoComplete="off"
					/>
					<button type="submit" className="btn btn-primary">
						Search
					</button>
				</form>
			</div>
			<div className="col-7">
				<h4>Result</h4>
				<hr />
				{q === "" ? (
					<div className="alert alert-primary">Search a hero</div>
				) : (
					heroes.length === 0 && (
						<div className="alert alert-danger">
							No hero with <b>{q}</b>{" "}
						</div>
					)
				)}
				{heroes?.map((hero) => (
					<HeroCard {...hero} key={hero.id} />
				))}
			</div>
		</div>
	);
};
