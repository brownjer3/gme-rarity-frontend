import Card from "react-bootstrap/Card";

const NftBasicDetailsCard = (props) => {
	const { index, image, name, rarityRank } = props;

	return (
		<Card
			bg="dark"
			text="white"
			border="light"
			index={index}
			className="details-card h-100"
		>
			<Card.Img
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
