import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { HeroRouter } from "../heroes/routerHero/HeroRouter";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route path="/*" element={<HeroRouter />} />
			</Routes>
		</>
	);
};
