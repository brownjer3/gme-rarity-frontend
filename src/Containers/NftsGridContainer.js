import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { transformUri } from '../Components/DataFormats';


export default function NftsGridContainer(props) {

    return (
        <div>
            <Row md={5} className="g-4">
                {props.nfts.length > 0 && props.nfts.map((nft, index) => {
                    return index === props.nfts.length - 1 && !props.loading && !!props.hasMore ?
                     (
                        <Col >
                            <Card bg='dark' text='white' border='light' index={index} className='detailsCard' onClick={props.handleItemSelect}>
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
                    ) : (
                            <Col>
                                <Card bg='dark' text='white' border='light' index={index} className='detailsCard' onClick={props.handleItemSelect}>
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
                    )
                })}
            </Row>
        </div>
    )
}