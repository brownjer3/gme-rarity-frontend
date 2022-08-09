import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLocation } from 'react-router-dom';
import { transformUri } from '../Components/DataFormats';
import NftBasicDetailsCard from '../Components/NftBasicDetailsCard';


export default function NftsGridContainer(props) {
    let location = useLocation();

    const makeGrid = () => {
        return props.nfts.map((nft, index) => {
            return (
                <Col>
                    <Link 
                        to={`/collections/${props.collectionSlug}/${nft.serialNum}`} 
                        state={{ background: location, nftData: nft }}
                        className='text-white text-decoration-none'
                        key={nft.id}
                    >
                        
                            <NftBasicDetailsCard 
                                index={index} 
                                image={transformUri(nft.metadataJson.image)} 
                                name={nft.name} 
                                rarityRank={nft.rarityRank}
                            />
                    </Link>
                </Col>
            )
        })
    }

    return (
        <Row xs={2} lg={5} className="g-4">
            {props.nfts.length > 0 && makeGrid()}
        </Row>
    )
}