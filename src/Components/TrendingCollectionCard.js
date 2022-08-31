import { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { transformUrl, EthData } from "../Components/DataFormats";

class TrendingCollectionCard extends Component {
	render() {
		const { name, slug, total_volume, total_items, avatar_url } =
			this.props.collection;

		return (
			<Col className="text-white">
				<Link
					className="text-white text-decoration-none"
					to={`/collections/${slug}`}
				>
					<Card bg="dark" border="light" className="details-card h-100">
						<Card.Img
							className="trending-card-img-top"
							variant="top"
							src={transformUrl(avatar_url)}
							alt={`Trending GameStop NFT Collection - ${name}`}
						/>
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<ListGroup className="list-group-flush">
								<ListGroup.Item className="bg-dark text-white border-0 border-bottom border-top border-secondary">
									Collection Size: {total_items}
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-white border-0 border-bottom border-secondary">
									24hr Volume:
									<EthData weiVal={total_volume} />
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-white">
									Floor price:
									<EthData weiVal="79000000000000000" />
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Link>
			</Col>
		);
	}
}

export default TrendingCollectionCard;
