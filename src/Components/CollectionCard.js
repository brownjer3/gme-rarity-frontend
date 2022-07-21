import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


class CollectionCard extends Component {
    render() {
        return (
            <Col>
                <Card bg='dark' border="light" >
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <ListGroup className="list-group-flush">
                            <ListGroup.Item className='bg-dark text-white'>Collection Size: {this.props.collectionSize}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>24hr Volume: {this.props.volume}</ListGroup.Item>
                        </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Link className='text-white text-decoration-none' to={`/collections/${this.props.slug}`}>
                        Collection Details
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2' />
                    </Link>
                </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CollectionCard;