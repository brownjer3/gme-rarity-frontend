import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { transformUrl } from "../Components/DataFormats";
import NftBasicDetailsCard from "../Components/NftBasicDetailsCard";

export default function NftsGridContainer(props) {
	let location = useLocation();
	const { slug, total_items, id } = props.collection;

	// 	{
	//     "collection_id": "802fc87d-f134-46c3-9a05-c1ee9192da20",
	//     "gme_url": "https://nft.gamestop.com/token/null/0x930ff4e66577c22563dc8060e0a48ab4b6f0fcebdffa42a03e8a579c5d6b1503",
	//     "nft_id": "dac8c208-e386-4b1f-8003-b43dbde3dc3f",
	//     "image_url": "https://www.gstop-content.com/ipfs/QmcGvtQ8GGG2sbrNThxjPayS2qEUs6U3qgo1w2D7TRiGYF",
	//     "name": "Monkey MetaBoy",
	//     "total_rarity_score": "7.0",
	//     "rank": "1",
	//     "attributes": "Monkey-Honorary -7.0-"
	//   },

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
							image={nft.image_url}
							name={nft.name}
							rarityRank={nft.rank}
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
