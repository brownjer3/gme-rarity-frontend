import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HomeBanner extends Component {
	render() {
		return (
			<div className="mb-4 pt-0 pb-4">
				<Row className="align-items-center">
					<Col className="main-logo" sm={12} md={12}>
						{/* <div className="ratio ratio-21x9"> */}
						<div>
							<video
								width="640"
								height="480"
								autoPlay
								loop
								muted
								playsInline
								// src={process.env.PUBLIC_URL+"/images/final.moon.name.24fps0001-0356.webm"}
								alt="Deep Fungible Value Logo - GameStop NFT Rarity Tool"
								className="bg-transparent hero-video"
							>
								<source
									src={
										process.env.PUBLIC_URL +
										"/videos/final.moon.name.24fps0001-0356.webm"
									}
									type="video/webm"
								/>
								<source
									src={
										process.env.PUBLIC_URL + "/videos/mobile-moon-render.mp4"
									}
									type="video/mp4"
								/>
								<p>Your browser does not support the video tag.</p>
							</video>
						</div>
					</Col>
					<Col sm={12} md={12} className="m-0 p-0">
						<h1 className="display-3">
							The #1 Rarity Tool for Gamestop's NFT Marketplace
						</h1>
					</Col>
				</Row>
			</div>
		);
	}
}

export default HomeBanner;
