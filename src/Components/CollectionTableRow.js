import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CollectionTableRow extends Component {
    render() {
        return (
            <tr >
                <td >{this.props.index+1}</td>
                <td>
                    <Link to={`/collections/${this.props.slug}`}>
                        <Row>
                            <Col md={2}>
                                <Image fluid rounded src={this.props.image} style={{ height: '3rem' }}/>
                            </Col>
                            <Col className='pt-2 pe-0 text-wrap text-start'>{this.props.name}</Col>  
                        </Row>
                    </Link>
                </td>
                <td >{this.props.collectionSize}</td>
                <td>{this.props.ownerCount}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
            </tr>
        )
    }
}

export default CollectionTableRow;