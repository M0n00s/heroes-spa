import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const LoginScreen = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleLogIn = () => {
		login("abdel arocha");
		navigate("/", {
			replace: true,
		});
	};

	return (
		<div>
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleLogIn}>
				Log In
			</button>
		</div>
	);
};
