import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


class TraitFilterContainer extends Component {
    render() {
        return (
            <div>
                <h3>Find your NFT</h3>
                <Form className="d-flex px-2">
                  <Form.Control
                    type="search"
                    placeholder="ID.."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <br />
                <h3>Traits</h3>
                <ListGroup variant="flush" className='text-start'>
                    <ListGroup.Item className='bg-dark text-white'>
                        Background
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                    </ListGroup.Item>
                    <ListGroup.Item className='bg-dark text-white'>
                        Body
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                    </ListGroup.Item>
                    <ListGroup.Item className='bg-dark text-white'>
                        Head
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                    </ListGroup.Item>
                    <ListGroup.Item className='bg-dark text-white'>
                        Weapon
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default TraitFilterContainer;