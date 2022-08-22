import { PureComponent } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EthData, roundNumbers, makeCollectionGmeLink } from "./DataFormats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

class CollectionBanner extends PureComponent {
	createStats = (itemCount, ownerCount, volume) => {
		return (
			<ListGroup horizontal>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder collection-stats">
						{roundNumbers(itemCount)}
					</div>
					<div>items</div>
				</ListGroup.Item>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">{roundNumbers(ownerCount)}</div>
					<div>owners</div>
				</ListGroup.Item>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">
						<EthData weiVal={volume} round />
					</div>
					<div>24hr volume</div>
				</ListGroup.Item>
				<ListGroup.Item className="bg-transparent text-white border collection-stats h-100">
					<div className="lead fw-bolder">
						<EthData weiVal={volume} round />
					</div>
					<div>total volume</div>
				</ListGroup.Item>
			</ListGroup>
		);
	};

	// 	"total_volume": "95480730000000000000",
	//     "avatar_url": "https://static.gstop-content.com/0fac0dce-1e1a-4c70-a0a6-44bd60485b0d",
	//     "banner_image_url": "https://static.gstop-content.com/b9919c2e-7fb0-411d-9811-1d62cf4488fc",
	//     "name": "Launch Day",
	//     "description": "\"...midnight release vibes\"",
	//     "id": "56fe1690-2287-424a-8bf2-5314f1ba6333",
	//     "contract_address": "0x9d8ddad8f046c7aea4180eb94596f9421c31e622",
	//     "total_items": "10",
	//     "slug": "vzewllaunchday"
	//   }

	render() {
		const {
			name,
			banner_image_url,
			description,
			slug,
			total_items,
			total_volume,
		} = this.props.collection;
		return (
			<Card bg="dark" text="white" border="light">
				<div className="collection-banner-img">
					<Card.Img
						className="position-relative top-50 start-50 translate-middle"
						variant="top"
						src={banner_image_url}
						alt={`GameStop NFT Collection Banner - ${name}`}
					/>
				</div>
				<Card.Body style={{ textAlign: "left" }}>
					<Row>
						<Col xs={12} lg={7}>
							<Card.Title className="display-6">{name}</Card.Title>
							<Card.Text>{description}</Card.Text>
						</Col>
						<Col lg={5} className="d-flex flex-column align-items-end">
							<Row className="text-center d-none d-lg-block mb-auto">
								{this.createStats(total_items, "7374", total_volume)}
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
