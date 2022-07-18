import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown'

class TraitFilterContainer extends Component {
    render() {
        return (
            <div>
                <h3>Traits</h3>
                <ListGroup variant="flush" className='text-start'>
                    <ListGroup.Item>
                        Category #1
                    </ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default TraitFilterContainer;