import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { HeroRouter } from "../heroes/routerHero/HeroRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path="login"
					element={
						<PublicRoutes>
							<LoginScreen />
						</PublicRoutes>
					}
				/>
				<Route
					path="/*"
					element={
						<PrivateRoutes>
							<HeroRouter />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</>
	);
};
