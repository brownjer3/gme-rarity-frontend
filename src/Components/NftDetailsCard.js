// import React, { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { transformUri, makeNftGmeLink } from './DataFormats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function NftDetailsCard(props) {
    // useEffect(() => {
    //         const closeButton = document.querySelector('.btn-close');
    //         closeButton.classList.add('btn-close-white');
    //   });

      const makeTraitRows = (traits) => {
        return Object.keys(traits).map((category) => {
            return (
                <tr>
                    <td>{category}</td>
                    <td>{traits[category]}</td>
                    <td className='text-center'>231</td>
                </tr>
            )
        })
      }

      const renderModal = () => {
        if (props.item) {
            return (
                <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header className='bg-dark text-white'>
                <Modal.Title>
                    {props.item.name}
                </Modal.Title>
                <button onClick={props.onHide} type="button" className="btn btn-close btn-close-white" aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={transformUri(props.item.metadataJson.image)} />
                        </Card>
                    </Col>
                    <Col>
                        <p>Rarity Rank #TBD</p>
                        <Table hover variant="dark" size="sm">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Value</th>
                                    <th>Rarity Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {makeTraitRows(props.item.metadataJson.properties)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='bg-dark text-white'>

                <a 
                className='text-decoration-none' 
                href={makeNftGmeLink(props.item.contractAddress, props.item.tokenId)}
                target="_blank"
                >
                    View on Gamestop
                    <FontAwesomeIcon icon={faUpRightFromSquare} className='mx-2' />
                </a>
            </Modal.Footer>
        </Modal>
            )
        } else 
            return <div></div>
      }

    return(
       renderModal()
    )
}
