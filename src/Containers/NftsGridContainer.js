import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLocation } from 'react-router-dom';
import { transformUri } from '../Components/DataFormats';
import NftBasicDetailsCard from '../Components/NftBasicDetailsCard';


export default function NftsGridContainer(props) {
    let location = useLocation();

    return (
        <div>
            <Row md={5} className="g-4">
                {props.nfts.length > 0 && props.nfts.map((nft, index) => {
                    return (
                    <Link 
                        to={`/collections/${props.collectionSlug}/${nft.serialNum}`} 
                        state={{ background: location, nftData: nft }}
                        className='text-white text-decoration-none'
                    >
                        <Col key={nft.id}>
                            <NftBasicDetailsCard 
                                index={index} 
                                image={transformUri(nft.metadataJson.image)} 
                                name={nft.name} 
                                rarityRank={nft.rarityRank}
                            />
                        </Col>
                    </Link>
                    )
                })}
            </Row>
        </div>
    )
}