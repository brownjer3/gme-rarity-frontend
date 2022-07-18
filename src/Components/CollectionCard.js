import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class CollectionCard extends Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Collection Size: {this.props.collectionSize}</ListGroup.Item>
                    <ListGroup.Item>24hr Volume: {this.props.volume}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                
                    <Link to={`/collections/${this.props.name}`} >View Collection</Link>

                </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CollectionCard;