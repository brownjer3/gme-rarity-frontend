import { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { transformUri, EthData } from "../Components/DataFormats";

class TrendingCollectionCard extends Component {
	render() {
		const { name, slug, volume, items, avatarUri } = this.props.collection;

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
							src={transformUri(avatarUri)}
							alt={`Trending GameStop NFT Collection - ${name}`}
						/>
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<ListGroup className="list-group-flush">
								<ListGroup.Item className="bg-dark text-white border-0 border-bottom border-top border-secondary">
									Collection Size: {items}
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-white">
									24hr Volume:
									<EthData weiVal={volume} />
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
