import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ItemsGridContainer extends Component {

    testData = [
        { 
            id: '3422',
            image: 'https://www.gstop-content.com/ipfs/QmVjCB7fiPkq9fwzBVFgU6cvu4YkiY6KH5eA3J5sqDQeQJ',
            rarityRank : "1"
        },
        { 
            id: '722',
            image: 'https://www.gstop-content.com/ipfs/QmdVHYfZkG6bD6e7cEJity6doz5baxvJjELd6fwVSeyTxS',
            rarityRank : "55"
        },
        { 
            id: '1035',
            image: 'https://www.gstop-content.com/ipfs/QmVq8TM5AvDFVAscMnkVauDRUZb5Ufw53xPy3EQFizZ9hp',
            rarityRank : "3355"
        },
        { 
            id: '23',
            image: 'https://www.gstop-content.com/ipfs/QmZ6grDxxNDrjyEYgFjy3MhXDAaxyJJDrViiRjRfiu4FEJ',
            rarityRank : "11"
        },
        { 
            id: '7222',
            image: 'https://www.gstop-content.com/ipfs/QmQy6g1iD2gCJJXDKTDcYx541RbcpaBbrxupkXNh5Tuzbi',
            rarityRank : "420.69"
        },
        { 
            id: '431',
            image: 'https://www.gstop-content.com/ipfs/Qmc9fimbCCN9oCHcffA5HepqwSt9JNatPn6513ZaXrih61',
            rarityRank : "9999"
        }
    ];

    // makeTableRows = () => {
    //     return this.testData.map((item, index) => {
    //         return <CollectionTableRow index={index} name={item.name} volume={item.volume} collectionSize={item.collectionSize} image={item.avatarUri}/>
    //     })
    // }

    render() {
        return(
            <Row md={5} className="g-4">
                {this.testData.map((item) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                        <Card.Title>Rarity Rank: {item.rarityRank}</Card.Title>
                        <Card.Text>#{item.id}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
        )
    }
}

export default ItemsGridContainer;