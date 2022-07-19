import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NftDetailsCard from '../Components/NftDetailsCard';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


export default function ItemsGridContainer() {
    const [modalShow, setModalShow] = useState(false);
    // const [selectedItemRank, setSelectedItemRank] = useState('1');

    const testData = [
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

    

    return (
        <div>
            <Row md={5} className="g-4">
                {testData.map((item) => (
                        <Col>
                            <Card bg='dark' text='white' border='light' onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                <Card.Title>Rarity Rank: {item.rarityRank}</Card.Title>
                                <Card.Text>#{item.id}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                ))}
            </Row>
            <NftDetailsCard
            name="DETAILS HEADER"
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>
    )
}

// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Rarity Rank: {rank}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
