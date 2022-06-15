import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { DcScreen } from "../heroes/DcScreen";
import { MarvelScreen } from "../heroes/MarvelScreen";
import { Navbar } from "../navbar/Navbar";

export const AppRouter = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/marvel" element={<MarvelScreen />} />
				<Route path="/dc" element={<DcScreen />} />
				<Route path="/login" element={<LoginScreen />} />

				<Route path="/" element={<Navigate to="/marvel" />} />
			</Routes>
		</>
	);
};
