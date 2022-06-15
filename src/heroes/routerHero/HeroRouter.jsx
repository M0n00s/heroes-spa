import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../navbar/Navbar";
import { MarvelScreen, DcScreen, HeroScreen, SearchScreen } from "../index";

export const HeroRouter = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelScreen />} />
					<Route path="dc" element={<DcScreen />} />

					<Route path="search" element={<SearchScreen />} />
					<Route path="hero" element={<HeroScreen />} />

					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};
