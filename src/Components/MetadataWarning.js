import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MetadataWarning = (props) => {
	const [showWarning, setShowWarning] = useState(false);

	const toggleShow = () => {
		setShowWarning((showWarning) => !showWarning);
	};

	return (
		<div className="text-start text-warning mb-2">
			<small onClick={toggleShow} className="metadata-warning fw-bold">
				<FontAwesomeIcon icon={faCircleInfo} />
				<span className="ms-1"> A note on {props.name} metadata </span>
			</small>
			{showWarning && (
				<div className="border rounded border-warning ps-2">
					<small>
						Due to some data inconsistencies in this collection, the rartiy
						rankings may be slightly inaccurate. If you are the creator of this
						collection, please{" "}
						<Link
							className="text-warning fw-bold text-decoration-none"
							to="/contact"
						>
							contact us.
						</Link>
					</small>
				</div>
			)}
		</div>
	);
};

export default MetadataWarning;
