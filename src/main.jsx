import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<App />
						</>
					}
				></Route>
				<Route
					path="/test"
					element={
						<>
							<Test />
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
