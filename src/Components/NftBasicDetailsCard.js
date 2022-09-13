import Card from "react-bootstrap/Card";

const NftBasicDetailsCard = (props) => {
	const { index, image, name, rarityRank } = props;

	const handleImgError = (e) => {
		const newSrc = image.split("?img")[0];
		e.target.src = newSrc;
	};

	return (
		<Card
			bg="dark"
			text="white"
			border="light"
			index={index}
			className="details-card h-100"
		>
			<Card.Img
				loading="lazy"
				onError={handleImgError}
				variant="top"
				className="nft-card-img"
				src={image}
				alt={`GameStop NFT - ${name}`}
			/>
			<Card.Body>
				<Card.Title>Rarity Rank: {rarityRank}</Card.Title>
				<Card.Text>{name}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default NftBasicDetailsCard;
