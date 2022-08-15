import "../Stars.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const SectionHeader = (props) => {
	return <h1 className="display-2">{props.name}</h1>;
};

export const NotFound = () => {
	return (
		<Container>
			<SectionHeader name="Page Not Found!" />
			<Image
				width="30%"
				src="https://m.media-amazon.com/images/I/81nho65ESrL._AC_SY879_.jpg"
				alt="Page Not Found"
			/>
		</Container>
	);
};

export const Stars = () => {
	return (
		<div>
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
		</div>
	);
};

export const LoadingScreen = () => {
	return (
		<div>
			<Stars />
			<FontAwesomeIcon
				className="fa-spin"
				style={{ marginTop: "25%" }}
				icon={faCircleNotch}
				size="10x"
			/>
		</div>
	);
};

export const Loading = () => (
	<FontAwesomeIcon
		className="fa-spin mt-4 py-4"
		icon={faCircleNotch}
		size="2x"
	/>
);
