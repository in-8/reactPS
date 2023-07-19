import "../index.css";
import Card from "./Card";
import {
	BsFillFilePersonFill,
	BsFillCalendarDayFill,
	BsFillPersonCheckFill,
} from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { MdGpsFixed, MdOutlineWorkHistory } from "react-icons/md";

export default function Content() {
	return (
		<>
			<div className="container-fluid content pt-5">
				<div className="row">
					<div className="offset-2 col-4">
						<Card
							title="Employee Information"
							icon={<BsFillFilePersonFill />}
							url={"/test"}
						/>
					</div>
					<div className=" col-4 mx-4">
						<Card
							title="Initiate Exit"
							icon={<RxExit />}
							url={"/test"}
						/>
					</div>
				</div>
				<div className="row mt-5">
					<div className="offset-2 col-4">
						<Card
							title="Track Exit"
							icon={<MdGpsFixed />}
							url={"/test"}
						/>
					</div>
					<div className=" col-4 mx-4">
						<Card
							title="Exit DocuSign"
							icon={<MdOutlineWorkHistory />}
							url={"/test"}
						/>
					</div>
				</div>
				<div className="row mt-5">
					<div className="offset-2 col-4">
						<Card
							title="Clearance Section"
							icon={<BsFillPersonCheckFill />}
							url={"/test"}
						/>
					</div>
					<div className=" col-4 mx-4">
						<Card
							title="Last Working Date"
							icon={<BsFillCalendarDayFill />}
							url={"/test"}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
