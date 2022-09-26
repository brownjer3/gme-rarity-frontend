import { PureComponent } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
	EthData,
	roundNumbers,
	makeCollectionGmeLink,
	transformImageUrl,
} from "./DataFormats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

class CollectionBanner extends PureComponent {
	truncateDescription = (desc) => {
		let truncated = desc || "";
		if (truncated.length > 400) {
			truncated = truncated.slice(0, 400) + "...";
		}
		return truncated;
	};
	createStats = (itemCount, floorPrice, totalVolume) => {
		return (
			<ListGroup horizontal>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder collection-stats">
						{roundNumbers(itemCount)}
					</div>
					<div>items</div>
				</ListGroup.Item>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">
						<EthData weiVal={floorPrice} />
					</div>
					<div>floor price</div>
				</ListGroup.Item>
				{/* <ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">
						<EthData weiVal={totalVolume} round />
					</div>
					<div>24hr volume</div>
				</ListGroup.Item> */}
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">
						<EthData weiVal={totalVolume} round />
					</div>
					<div>total volume</div>
				</ListGroup.Item>
			</ListGroup>
		);
	};

	handleBannerError = (e) => {
		const blackBanner =
			"https://static.gstop-content.com/14d0d64a-cd66-4fd8-9363-95f545d9c5c5?img-width=expanded&img-format=WebP";
		e.target.src = blackBanner;
	};

	render() {
		const {
			name,
			banner_image_url,
			description,
			slug,
			total_items,
			total_volume,
			floor_price,
		} = this.props.collection;
		return (
			<Card bg="dark" text="white" border="light">
				<div className="collection-banner-img">
					<Card.Img
						className="position-relative top-50 start-50 translate-middle"
						variant="top"
						onError={this.handleBannerError}
						src={transformImageUrl(banner_image_url, "banner")}
						alt={`GameStop NFT Collection Banner - ${name}`}
					/>
				</div>
				<Card.Body style={{ textAlign: "left" }}>
					<Row>
						<Col xs={12} lg={8}>
							<Card.Title className="display-6">{name}</Card.Title>
							<Card.Text>{this.truncateDescription(description)}</Card.Text>
						</Col>
						<Col lg={4} className="d-flex flex-column align-items-end">
							<Row className="text-center d-none d-lg-block mb-auto">
								{this.createStats(total_items, floor_price, total_volume)}
							</Row>
							<Row className="mt-2">
								<a href={makeCollectionGmeLink(slug)} target="_blank">
									<Button variant="outline-danger">
										View on GameStop
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="mx-2"
										/>
									</Button>
								</a>
							</Row>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		);
	}
}

export default CollectionBanner;
