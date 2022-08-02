import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { EthData, roundNumbers, makeCollectionGmeLink } from './DataFormats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


class CollectionBanner extends Component {

    createStats = (itemCount, ownerCount, volume) => {
        return (
            <ListGroup horizontal >
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{roundNumbers(itemCount)}</div> 
                    <div>items</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{ownerCount}</div> 
                    <div>owners</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>
                        <EthData weiVal={volume} round/>
                    </div>
                    <div>24hr volume</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>
                        <EthData weiVal={volume} round/>
                    </div>
                    <div>total volume</div>
                </ListGroup.Item>
            </ListGroup>
        )
    }

    render() {
        const { name, banner_uri, description, slug, items, volume } = this.props.collection
        return (
            <Card bg='dark' text='white' border='light'>
                <div className='w-100 overflow-hidden' style={{height: "220px"}}>
                    <Card.Img 
                        className='position-relative top-50 start-50 translate-middle' 
                        variant="top" 
                        src={banner_uri} 
                        alt={`GameStop NFT Collection Banner - ${name}`}
                    />
                </div>
                <Card.Body style={{textAlign: "left"}}>
                    <Row>
                        <Col md={7}>
                            <Card.Title className='display-6'>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Col>
                        <Col md={5}>
                            <Row className='float-end text-center'>
                                {this.createStats(items, "7374", volume)}
                            </Row>
                            <Row className='mt-2 float-end'>                                        
                                <a href={makeCollectionGmeLink(slug)} target="_blank">
                                    <Button variant="outline-primary">
                                        View on GameStop
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2' />
                                    </Button>
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default CollectionBanner;