import React from 'react';
import Card from 'react-bootstrap/Card';

const NftBasicDetailsCard = (props) => {
    const { index, image, name, rarityRank } = props;

    return (
        <Card 
            bg='dark' 
            text='white' 
            border='light' 
            index={index} 
            className='details-card' 
            // onClick={props.handleItemSelect}
        >
            <Card.Img 
                variant="top" 
                src={image} 
                alt={`GameStop NFT - ${name}`}
            />
            <Card.Body>
            <Card.Title>Rarity Rank: {rarityRank}</Card.Title>
            <Card.Text>{name}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NftBasicDetailsCard;