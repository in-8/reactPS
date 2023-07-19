import "../index.css";
import { Link } from "react-router-dom";

export default function Card({ title, icon, url }) {
	return (
		<Link to={url}>
			<div className=" bg-light card fs-1 p-3">
				<div className="row g-0">
					<div className="col-md-4 text-center">{icon}</div>
					<div className="col-md-8">
						<div className="card-body">
							<h4 className="card-title">{title}</h4>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
