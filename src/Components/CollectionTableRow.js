import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class CollectionTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td style={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                    <Image fluid rounded src={this.props.image} style={{ height: '3rem' }}/>
                    {this.props.name}
                </td>
                <td>{this.props.collectionSize}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.volume}</td>
            </tr>
        )
    }
}

export default CollectionTableRow;