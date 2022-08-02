import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EthData, transformUri } from '../Components/DataFormats';

class CollectionTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>
                    <Link className='text-white text-decoration-none' to={`/collections/${this.props.slug}`}>
                        <Row>
                            <Col md={2}>
                                <Image fluid rounded src={transformUri(this.props.image)} style={{ height: '3rem' }}/>
                            </Col>
                            <Col className='pt-2 pe-0 text-wrap text-start'>{this.props.name}</Col>  
                        </Row>
                    </Link>
                </td>
                <td >{this.props.collectionSize}</td>
                <td>{this.props.ownerCount}</td>
                <td>
                    <EthData weiVal={this.props.volume}/>
                </td>
                <td>
                    <EthData weiVal={this.props.volume}/>
                    </td>
                <td>
                    <EthData weiVal={this.props.volume}/>
                </td>
            </tr>
        )
    }
}

export default CollectionTableRow;