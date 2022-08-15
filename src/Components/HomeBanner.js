import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomeBanner extends Component {
	render() {
		return (
			<div className="p-5 m-3 mt-0">
				<Row className="align-items-center">
					<Col className="main-logo" sm={12} md={6}>
						<div className="ratio ratio-4x3">
							<video
								// width="640"
								// height="480"
								autoPlay
								loop
								muted
								playsInline
								// src={process.env.PUBLIC_URL+"/images/final.moon.name.24fps0001-0356.webm"}
								alt="Deep Fungible Value Logo - GameStop NFT Rarity Tool"
								className="bg-transparent"
							>
								<source
									src={
										process.env.PUBLIC_URL +
										"/images/final.moon.name.24fps0001-0356.webm"
									}
									type="video/webm"
								/>
								<source
									src={process.env.PUBLIC_URL + "/images/untitled.mp4"}
									type="video/mp4"
								/>
								<source src="movie.ogg" type="video/ogg" />
								Your browser does not support the video tag.
							</video>
						</div>
					</Col>
					<Col sm={12} md={6}>
						<h1 className="display-4">
							The #1 rarity tool for the Gamestop NFT Marketplace
						</h1>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomeBanner;
