import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
	const navigate = useNavigate();

	const handleLogIn = () => {
		console.log("click");
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
