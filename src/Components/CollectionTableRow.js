import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class CollectionTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td style={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                    <Link to={`/collections/${this.props.slug}`}>
                        <Image fluid rounded src={this.props.image} style={{ height: '3rem' }}/>
                        {this.props.name}
                    </Link>
                </td>
                <td>{this.props.collectionSize}</td>
                <td>{this.props.ownerCount}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
            </tr>
        )
    }
}

export default CollectionTableRow;