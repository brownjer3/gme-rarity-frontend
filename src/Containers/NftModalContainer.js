import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NftModal from "../Components/NftModal";
import { useSelector } from "react-redux";

const NftModalContainer = () => {
	const location = useLocation();
	const { nftId, collectionSlug } = useParams();
	const collection = useSelector((state) =>
		state.collections.data.find(
			(collection) => collection.slug === collectionSlug
		)
	);
	const collectionId = collection.id;
	const collectionSupply = collection.items;
	let nftData;

	const navigate = useNavigate();
	const handleClose = () => navigate(-1);

	const [modalShow, setModalShow] = useState(true);
	const [isNftFound, setIsNftFound] = useState(false);
	const [nft, setNft] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (location.state) {
			nftData = location.state.nftData;
			setLoading(false);
			setIsNftFound(true);
			setNft(nftData);
		} else {
			setLoading(true);
			fetchNft();
		}
	}, []);

	const fetchNft = async () => {
		let url = `http://localhost:3001/collections/${collectionId}/nfts?serialNum=${nftId}`;
		const res = await fetch(url);
		const data = await res.json();

		if (data.length == 0) {
			setIsNftFound(false);
			setModalShow(true);
		} else {
			setIsNftFound(true);
			setNft(data[0]);
			setModalShow(true);
		}
		setLoading(false);
	};

	return (
		<NftModal
			nft={nft}
			collectionSupply={collectionSupply}
			isNftFound={isNftFound}
			loading={loading}
			show={modalShow}
			onHide={handleClose}
		/>
	);
};

export default NftModalContainer;
