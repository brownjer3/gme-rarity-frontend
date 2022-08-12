// import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { transformUri, makeNftGmeLink } from "./DataFormats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "./Components";

export default function NftModal(props) {
	const makeTraitRows = (traits) => {
		return Object.keys(traits).map((category, index) => {
			return (
				<tr key={index.toString()}>
					<td>{category}</td>
					<td>{traits[category]}</td>
					<td className="text-center">21</td>
				</tr>
			);
		});
	};

	const renderModal = () => {
		if (props.loading) {
			return (
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Body>
						<Loading />
					</Modal.Body>
				</Modal>
			);
		} else if (!props.isNftFound) {
			return (
				<Modal
					show={props.show}
					onHide={props.onHide}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					className="text-center"
				>
					<Modal.Header className="bg-dark text-white text-center">
						<Modal.Title className="w-100">
							Oops! We couldn't find your NFT
						</Modal.Title>
						<button
							onClick={props.onHide}
							type="button"
							className="btn btn-close btn-close-white"
							aria-label="Close"
						></button>
					</Modal.Header>
					<Modal.Body className="bg-dark text-white">
						<Image
							width="30%"
							src="https://m.media-amazon.com/images/I/81nho65ESrL._AC_SY879_.jpg"
							alt="NFT Not Found"
						/>
					</Modal.Body>
				</Modal>
			);
		} else {
			return (
				<Modal
					show={props.show}
					onHide={props.onHide}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header className="bg-dark text-white text-center">
						<Modal.Title className="w-100">
							<h1 className="display-6">{props.nft.name}</h1>
						</Modal.Title>
						<button
							onClick={props.onHide}
							type="button"
							className="btn btn-close btn-close-white"
							aria-label="Close"
						></button>
					</Modal.Header>
					<Modal.Body className="bg-dark text-white">
						<Row>
							<Col xs={12} lg={6}>
								<Card>
									<Card.Img src={transformUri(props.nft.metadataJson.image)} />
								</Card>
							</Col>
							<Col xs={12} lg={6}>
								<p className="text-center">
									<span className="fw-bold">Rarity Rank:</span>{" "}
									{props.nft.rarityRank} out of {props.collectionSupply}
								</p>
								<Table hover variant="dark" size="sm">
									<thead>
										<tr>
											<th>Type</th>
											<th>Value</th>
											<th>Rarity Score</th>
										</tr>
									</thead>
									<tbody>
										{makeTraitRows(props.nft.metadataJson.properties)}
										<tr className="fw-bold text-danger">
											<td colSpan={2}>Total Rarity Score</td>
											<td className="text-center">352</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer className="bg-dark">
						<a
							className="text-decoration-none text-danger"
							href={makeNftGmeLink(
								props.nft.contractAddress,
								props.nft.tokenId
							)}
							target="_blank"
						>
							View on Gamestop
							<FontAwesomeIcon icon={faUpRightFromSquare} className="mx-2" />
						</a>
					</Modal.Footer>
				</Modal>
			);
		}
	};

	return renderModal();
}
