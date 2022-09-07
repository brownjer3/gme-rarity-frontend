import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { roundDecimals, transformImageUrl } from "./DataFormats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "./Components";

export default function NftModal(props) {
	const handleTraitString = (traitString) => {
		let traitObj = {};

		const traitArr = traitString.split(")(");
		let categoryName;
		let traitName;
		let traitScore;
		for (let i = 0; i < traitArr.length; i++) {
			let traitGroup = traitArr[i].split(";");
			categoryName = traitGroup[0];
			traitName = traitGroup[1];
			traitScore = traitGroup[2];
			if (i == 0) {
				categoryName = categoryName.replace("(", "");
			}
			if (i == traitArr.length - 1) {
				traitScore = traitScore.replace(")", "");
			}
			traitObj[categoryName] = [traitName, traitScore];
		}

		return traitObj;
	};

	const makeTraitRows = (traitString) => {
		const traitObj = handleTraitString(traitString);

		return Object.keys(traitObj).map((category, index) => {
			return (
				<tr key={index.toString()}>
					<td>{category}</td>
					<td>{traitObj[category][0]}</td>
					<td className="text-center">{traitObj[category][1]}</td>
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
									<Card.Img
										src={transformImageUrl(props.nft.image_url, "nft")}
									/>
								</Card>
							</Col>
							<Col xs={12} lg={6}>
								{props.nft.edition_count > 1 && (
									<p>
										<span className="fw-bold">Editions:</span>{" "}
										{props.nft.edition_count}
									</p>
								)}
								<p>
									<span className="fw-bold">Rarity Rank:</span> {props.nft.rank}{" "}
									out of {props.collectionSupply}
								</p>
								<Table hover variant="dark" size="sm">
									<thead>
										<tr>
											<th style={{ width: "35%" }}>Type</th>
											<th style={{ width: "35%" }}>Value</th>
											<th style={{ width: "30%" }}>Rarity Score</th>
										</tr>
									</thead>
									<tbody>
										{makeTraitRows(props.nft.attributes)}
										<tr className="fw-bold text-danger">
											<td colSpan={2}>Total Rarity Score</td>
											<td className="text-center">
												{roundDecimals(props.nft.total_rarity_score)}
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer className="bg-dark">
						<a
							className="text-decoration-none text-danger"
							href={props.nft.gme_url}
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
