import React, { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

export default function NftDetailsCard(props) {
    // useEffect(() => {
    //         const closeButton = document.querySelector('.btn-close');
    //         closeButton.classList.add('btn-close-white');
    //   });

      const makeTraitRows = (traits) => {
        if (traits) {
            return Object.keys(traits).map((category) => {
                return (
                    <tr>
                        <td>{category}</td>
                        <td>{traits[category]}</td>
                        <td>231</td>
                    </tr>
                )
            })
        } else {
            <div>nothing yet</div>
        }
      }

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
                                    <th>Rarity Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {makeTraitRows(props.item.traits)}
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
