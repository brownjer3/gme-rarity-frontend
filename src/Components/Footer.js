import React, { PureComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

class Footer extends PureComponent {
	state = {
		gmeDonationAddress: "0x61942db583EC58f61e7635f40514247E68312625",
		clicked: false,
	};

	handleAddressCopy = () => {
		this.setState({ clicked: true });
		navigator.clipboard.writeText(this.state.gmeDonationAddress);
	};

	render() {
		return (
			<Navbar bg="transparent" text="white" className="mt-auto">
				<Container fluid className="justify-content-center">
					<Row className="w-100 align-items-center" xs={1} lg={2}>
						<Col>
							<small className="font-monospace ">
								<p>
									Made with 🚀 by{" "}
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
									Logos 🎨 by{" "}
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
							<small className="font-monospace pt-3">
								<p>Want to buy us a coffee?</p>
								<p>
									<span className="me-1">
										GME Wallet: {this.state.gmeDonationAddress}
									</span>
									<FontAwesomeIcon
										icon={faCopy}
										beat={this.state.clicked}
										className="beat-once"
										onClick={this.handleAddressCopy}
										onAnimationEnd={() => this.setState({ clicked: false })}
									/>
								</p>
							</small>
						</Col>
					</Row>
				</Container>
			</Navbar>
		);
	}
}

export default Footer;
