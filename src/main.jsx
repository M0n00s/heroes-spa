import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { HeroesSpa } from "./HeroesSpa";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroesSpa />
		</BrowserRouter>
	</React.StrictMode>
);
