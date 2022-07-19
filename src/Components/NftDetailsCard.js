import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

export default function NftDetailsCard(props) {

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header className='bg-dark text-white' closeButton>
                <Modal.Title>
                    {props.collectionName} #{props.item.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={props.item.image} />
                        </Card>
                    </Col>
                    <Col>
                        <p>Rarity Rank #{props.item.rarityRank}</p>
                        <Table hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Value</th>
                                    <th>Count</th>
                                    <th>Rarity Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Background</td>
                                    <td>Space</td>
                                    <td>6666</td>
                                    <td>231</td>
                                </tr>
                                <tr>
                                    <td>Hat</td>
                                    <td>Halo</td>
                                    <td>777</td>
                                    <td>8323</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='bg-dark text-white'>

                <a className='text-decoration-none' href="#">
                    View on Gamestop
                    <FontAwesomeIcon icon={faUpRightFromSquare} className='mx-2' />
                </a>
            </Modal.Footer>
        </Modal>
    )
}
