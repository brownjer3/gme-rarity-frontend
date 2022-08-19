import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { transformUrl } from "../Components/DataFormats";
import NftBasicDetailsCard from "../Components/NftBasicDetailsCard";

export default function NftsGridContainer(props) {
	let location = useLocation();
	const { slug, items, id } = props.collection;

	const makeGrid = () => {
		return props.nfts.map((nft, index) => {
			return (
				<Col key={nft.id}>
					<Link
						to={`/collections/${slug}/${nft.serialNum}`}
						state={{
							background: location,
							nftData: nft,
							collectionSupply: items,
							collectionId: id,
						}}
						className="text-white text-decoration-none"
					>
						<NftBasicDetailsCard
							index={index}
							image={transformUrl(nft.metadataJson.image)}
							name={nft.name}
							rarityRank={nft.rarityRank}
						/>
					</Link>
				</Col>
			);
		});
	};

	return (
		<Row xs={2} lg={5} className="g-4">
			{props.nfts.length > 0 && makeGrid()}
		</Row>
	);
}
