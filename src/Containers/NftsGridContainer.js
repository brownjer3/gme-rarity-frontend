import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLocation } from 'react-router-dom';
import { transformUri } from '../Components/DataFormats';


export default function NftsGridContainer(props) {
    let location = useLocation();

    return (
        <div>
            <Row md={5} className="g-4">
                {props.nfts.length > 0 && props.nfts.map((nft, index) => {
                    return index === props.nfts.length - 1 && !props.loading && !!props.hasMore ?
                     (<Link 
                        to={`/collections/Metaboy/${nft.serialNum}`} 
                        state={{ background: location }}
                     >
                        <Col key={nft.id}>
                            <Card 
                                bg='dark' 
                                text='white' 
                                border='light' 
                                index={index} 
                                className='detailsCard' 
                                // onClick={props.handleItemSelect}
                            >
                                <Card.Img 
                                    variant="top" 
                                    src={transformUri(nft.metadataJson.image)} 
                                    alt={`GameStop NFT - ${nft.name}`}
                                />
                                <Card.Body>
                                <Card.Title>Rarity Rank: TBD</Card.Title>
                                <Card.Text>{nft.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Link>
                    ) : (
                        <Link  
                            to={`/collections/Metaboy/${nft.serialNum}`} 
                            state={{ background: location }}
                        >
                        <Col key={nft.id}>
                            <Card 
                                bg='dark' 
                                text='white' 
                                border='light' 
                                index={index} 
                                className='detailsCard' 
                                // onClick={props.handleItemSelect}
                            >
                                <Card.Img 
                                    variant="top" 
                                    src={transformUri(nft.metadataJson.image)} 
                                    alt={`GameStop NFT - ${nft.name}`}
                                />
                                <Card.Body>
                                <Card.Title>Rarity Rank: {nft.rarityRank}</Card.Title>
                                <Card.Text>{nft.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Link>
                    )
                })}
            </Row>
        </div>
    )
}