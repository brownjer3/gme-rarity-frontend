import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons';


class TraitFilterContainer extends Component {


    handleClick(e) {
        const dropdownContent = e.target.querySelector('.dropdown-container') || e.target.closest('.dropdown-btn').querySelector('.dropdown-container');
        if (dropdownContent.classList.contains("d-none")) {
            dropdownContent.classList.remove("d-none");
          } else {
            dropdownContent.classList.add("d-none");
          }
    }

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
                        <ListGroup.Item className='dropdown-btn bg-dark text-white' onClick={this.handleClick}>
                            Background
                            <FontAwesomeIcon icon={faCaretDown} className='arrow mx-2'/>
                            <ListGroup variant="flush" className='dropdown-container d-none text-start'>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 1</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 2</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 3</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>   
                    <ListGroup.Item className='dropdown-btn bg-dark text-white' onClick={this.handleClick}>
                        Body
                        <FontAwesomeIcon icon={faCaretDown} className='arrow mx-2'/>
                        <ListGroup variant="flush" className='dropdown-container d-none text-start'>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 1</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 2</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 3</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                            </ListGroup>
                    </ListGroup.Item>
                    <ListGroup.Item className='dropdown-btn bg-dark text-white' onClick={this.handleClick}>
                        Head
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                        <ListGroup variant="flush" className='dropdown-container d-none text-start'>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 1</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 2</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 3</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                            </ListGroup>
                    </ListGroup.Item>
                    <ListGroup.Item className='dropdown-btn bg-dark text-white' onClick={this.handleClick}>
                        Weapon
                        <FontAwesomeIcon icon={faCaretDown} className='mx-2'/>
                        <ListGroup variant="flush" className='dropdown-container d-none text-start'>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 1</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 2</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-white d-flex justify-content-between'>
                                    <span>Trait 3</span>
                                    <input type='checkbox'/>
                                </ListGroup.Item>
                            </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default TraitFilterContainer;