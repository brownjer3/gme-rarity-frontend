import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { transformImageUrl } from "../Components/DataFormats";
import NftBasicDetailsCard from "../Components/NftBasicDetailsCard";

const NftsGridContainer = (props) => {
	let location = useLocation();
	const { slug, total_items, id } = props.collection;

	const makeGrid = () => {
		return props.nfts.map((nft, index) => {
			return (
				<Col key={nft.nft_id}>
					<Link
						to={`/collections/${slug}/${nft.nft_id}`}
						state={{
							background: location,
							nftData: nft,
							collectionSupply: total_items,
							collectionId: id,
						}}
						className="text-white text-decoration-none"
					>
						<NftBasicDetailsCard
							index={index}
							image={transformImageUrl(nft.image_url, "nft")}
							name={nft.name}
							rarityRank={nft.rank}
						/>
					</Link>
				</Col>
			);
		});
	};

	if (props.nfts.length > 0) {
		return (
			<Row xs={2} lg={5} className="g-4">
				{props.nfts.length > 0 && makeGrid()}
			</Row>
		);
	} else {
		return <></>;
	}
	// return (
	// 	<Row xs={2} lg={5} className="g-4">
	// 		{props.nfts.length > 0 && makeGrid()}
	// 	</Row>
	// );
};

export default NftsGridContainer;
