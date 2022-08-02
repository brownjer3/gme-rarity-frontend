import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import NftModal from '../Components/NftModal';
// import TestModal from '../Components/TestModal';

const NftModalContainer = () => {
    const location = useLocation();
    const { nftData } = location.state;
    const { nftId } = useParams();
    const navigate = useNavigate();
    const handleClose = () => navigate(-1);

    const [modalShow, setModalShow] = useState(true);
    const [isNftFound, setIsNftFound] = useState(false);
    const [nft, setNft] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (nftData) {
            setLoading(false);
            setIsNftFound(true);
            setNft(nftData);
        } else {
            fetchNft();
        }
    }, [])

    const fetchNft = async () => {
        setLoading(true);

        let collectionId = "36fab6f7-1e51-49d9-a0be-39343abafd0f"
        let url = `http://localhost:3001/collections/${collectionId}/nfts?serialNum=${nftId}`
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
    }

    return (
        <NftModal 
            nft={nft} 
            isNftFound={isNftFound}
            loading={loading} 
            show={modalShow} 
            onHide={handleClose}
        />
    )
}

export default NftModalContainer;