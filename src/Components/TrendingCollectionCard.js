import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { transformUri, EthData } from '../Components/DataFormats';



class TrendingCollectionCard extends Component {

    render() {
        const { name, slug, volume, items, avatarUri } = this.props.collection;

        return (
            <Col>
                <Card bg='dark' border="light" className='details-card'>
                <Card.Img variant="top" src={transformUri(avatarUri)} alt={`Trending GameStop NFT Collection - ${name}`}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-flush">
                            <ListGroup.Item className='bg-dark text-white'>Collection Size: {items}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>
                                24hr Volume:
                                <EthData weiVal={volume} />
                            </ListGroup.Item>
                        </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Link className='text-white text-decoration-none' to={`/collections/${slug}`}>
                        Collection Details
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2' />
                    </Link>
                </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default TrendingCollectionCard;