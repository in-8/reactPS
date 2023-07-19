import { useState, useEffect } from "react";
import "../index.css";
import backarrow from "../assets/backarrow.png";
export default function Navbar() {
	const [currentDateTime, setcurrentDateTime] = useState(
		new Date().toLocaleString()
	);

	useEffect(() => {
		setInterval(() => {
			setcurrentDateTime(new Date().toLocaleString());
		}, 1000);
	}, []);

	return (
		<>
			<div className="container-fluid p-3 fs-3 navbar text-white">
				<button
					onClick={() =>
						console.log("back button at nav bar clicked")
					}
					className="btn btn-lg btn-dark col-1"
				>
					<img src={backarrow} height={25} width={20} />
				</button>

				<div className="col-5 px-3">Exit Portal</div>
				<div className="offset-3 col-3">{currentDateTime}</div>
			</div>
		</>
	);
}
