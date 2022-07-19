import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


class CollectionCard extends Component {
    render() {
        return (
            <Col>
                <Card bg='dark' border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        A collection of 10,000 unique algorithmically generated MetaBoy's that brings the love of gaming, pixelart and technology together.
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                            <ListGroup.Item className='bg-dark text-white'>Collection Size: {this.props.collectionSize}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>24hr Volume: {this.props.volume}</ListGroup.Item>
                        </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Link className='text-white text-decoration-none' to={`/collections/${this.props.name}`}>
                        Collection Details
                        <FontAwesomeIcon icon={faUpRightFromSquare} className='mx-2' />
                    </Link>
                </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CollectionCard;