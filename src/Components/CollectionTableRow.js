import { Component } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { EthData } from "./DataFormats";

class CollectionTableRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.index + 1}</td>
				<td>
					<Link
						className="text-white text-decoration-none"
						to={`/collections/${this.props.slug}`}
					>
						<Row className="text-start">
							<Col xs={12} md={2}>
								<Image
									fluid
									rounded
									src={this.props.image}
									style={{ height: "3rem" }}
									alt={`GameStop NFT Collection Avatar - ${this.props.name}`}
								/>
							</Col>
							<Col className="pt-2 text-wrap">{this.props.name}</Col>
						</Row>
					</Link>
				</td>
				<td>{this.props.collectionSize}</td>
				<td>
					<EthData weiVal={this.props.floorPrice} />
				</td>
				<td>
					<EthData weiVal={this.props.totalVolume} />
				</td>
				{/* <td>
					<EthData weiVal={this.props.monthVolume} />
				</td>
				<td>
					<EthData weiVal={this.props.dayVolume} />
				</td> */}
			</tr>
		);
	}
}

export default CollectionTableRow;
