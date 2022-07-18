import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemsGridContainer from './ItemsGridContainer';
import GridPagination from '../Components/GridPagination';


export default function CollectionContainer() {
    const { collectionName } = useParams();

    const testData = {
        banner: "https://static.gstop-content.com/6fa28178-8e9c-4f3b-8e0d-fa960d321d12?img-width=expanded&img-format=WebP",
        name: collectionName,
        description: "A collection of 10,000 unique algorithmically generated MetaBoy's that brings the love of gaming, pixelart and technology together.",
        supply: '10,000',
        gmeLink: 'https://nft.gamestop.com/collection/MetaBoy',
        stats: {
            dayVolume: '44 ETH',
            weekVolume: '1.1k ETH',
            totalVolume: '1.1k ETH'
        }
    }

    return(
        <Container>
            <Card>
                <Card.Img variant="top" src={testData.banner} />
                <Card.Body style={{textAlign: "left"}}>
                    <Card.Title>{testData.name}</Card.Title>
                    <Card.Text>{testData.description}</Card.Text>
                    <a href={testData.gmeLink} target="_blank">
                        <Button variant="primary" >View on GameStop</Button>
                    </a>
                </Card.Body>
            </Card>
            <br />
            <p style={{textAlign: "left"}} className="text-muted">{testData.supply} items</p>
            <ItemsGridContainer />
            <br />
            <GridPagination />
        </Container>
    )
}

// class CollectionContainer extends Component {

//     getSlug = () => {
//         const { collectionName } = useParams();
//         console.log(collectionName);

//         return collectionName;
//     }



//     render() {

//     }
// }

// export default CollectionContainer;


