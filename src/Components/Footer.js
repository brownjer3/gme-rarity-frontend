import { useState } from "react";
import { useMatch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	let match = useMatch("/collections/:collectionSlug");

	const [gmeDonationAddress, setGmedonationAddress] = useState(
		"0x61942db583EC58f61e7635f40514247E68312625"
	);
	const [clicked, setClicked] = useState(false);

	const handleAddressCopy = () => {
		setClicked(true);
		navigator.clipboard.writeText(gmeDonationAddress);
	};

	if (!match) {
		return (
			<Navbar bg="transparent" text="white" className="mt-auto">
				<Container className="justify-content-between">
					<Row className="w-100 align-items-center " xs={1} lg={2}>
						{/* <Row className="w-100 py-4">
							
						</Row> */}
						<Col className="text-start">
							<p className="font-monospace fw-bold">
								Made with
								<img
									className="pb-1 mx-2"
									src={process.env.PUBLIC_URL + "/images/rocket_1.ico"}
								></img>
								for the GameStop Community
							</p>
							<small className="font-monospace ">
								<p>
									Development by{" "}
									<a
										className="text-decoration-none text-white"
										href="https://twitter.com/honey_crisp_"
										target="_blank"
									>
										@honey_crisp_{" "}
									</a>
									and
									<a
										className="text-decoration-none text-white"
										href="https://twitter.com/GatoFlaco9"
										target="_blank"
									>
										{" "}
										@GatoFlaco9{" "}
									</a>
								</p>
							</small>
							<small className="font-monospace">
								<p>
									Logo Designs by{" "}
									<a
										className="text-decoration-none text-white"
										href="https://twitter.com/_ordinarypat"
										target="_blank"
									>
										@_ordinarypat
									</a>
								</p>
							</small>
						</Col>
						<Col>
							<p className="font-monospace pt-3">Want to buy us a coffee?</p>
							<p className="font-monospace donation-address">
								<span className="me-1">GME Wallet: {gmeDonationAddress}</span>
								<FontAwesomeIcon
									icon={faCopy}
									beat={clicked}
									className="beat-once"
									onClick={handleAddressCopy}
									onAnimationEnd={() => setClicked(false)}
								/>
							</p>
						</Col>
					</Row>
				</Container>
			</Navbar>
		);
	}
};

export default Footer;
