import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NftDetailsCard from '../Components/NftDetailsCard';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


export default function ItemsGridContainer(props) {
    // const [modalShow, setModalShow] = useState(false);
    // const [selectedItemRank, setSelectedItemRank] = useState('1');

    return (
        <div>
            <Row md={5} className="g-4">
                {props.items.map((item, index) => (
                    <Col>
                        <Card bg='dark' text='white' border='light' index={index} className='detailsCard' onClick={props.handleItemSelect}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                            <Card.Title>Rarity Rank: {item.rarityRank}</Card.Title>
                            <Card.Text>#{item.id}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}