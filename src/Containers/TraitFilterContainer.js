import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';


class TraitFilterContainer extends Component {

    createTraits = (category, categoryName) => {
        return Object.keys(category).map((trait, index) => {
            return ( 
                <ListGroup.Item key={index.toString()} className='bg-transparent text-white d-flex justify-content-between'>
                    <label htmlFor={trait}>{trait} ({category[trait]})</label>
                    <input className='ms-1' id={trait} type='checkbox' value={`${categoryName}-${trait}`} checked={this.props.isTraitSelected(categoryName, trait)} onChange={this.props.handleTraitSelect}/>
                </ListGroup.Item>
            )
        }); 
    }

    createTraitMenu = (traits) => {
        return Object.keys(traits).map((category, index) => {
            return ( 
                <ListGroup.Item key={index.toString()} className='dropdown-btn bg-transparent text-white'>
                    <span onClick={this.handleClick}>
                        {category}
                        <FontAwesomeIcon icon={faCaretDown} className='arrow mx-2'/>
                    </span>
                    <ListGroup variant="flush" className='dropdown-container d-none text-start'>
                        {this.createTraits(traits[category], category)}
                    </ListGroup>
                </ListGroup.Item>  
            )
        });
    }

    handleClick(e) {
        const dropdownContent = e.target.closest('.dropdown-btn').querySelector('.dropdown-container');
        if (dropdownContent.classList.contains("d-none")) {
            dropdownContent.classList.remove("d-none");
          } else {
            dropdownContent.classList.add("d-none");
          }
    }

    render() {
        return (
            <div className="" >
                <Image 
                    fluid thumbnail 
                    className="ms-2 mb-2" 
                    src={this.props.image}
                    alt={`GameStop NFT Collection Avatar - ${this.props.name}`}
                />
                <h3>Find your NFT</h3>
                <Form className="d-flex px-2" onSubmit={this.props.handleSearch}>
                  <Form.Control
                    type="search"
                    placeholder="ID.."
                    className="me-2"
                    aria-label="Search"
                    onInput={this.props.handleQueryInput}
                  />
                  <Button type='submit' variant="outline-success">Search</Button>
                </Form>
                <br />
                <h3>Traits</h3>
                <ListGroup variant="flush" className='text-start'>
                    {this.createTraitMenu(this.props.traits)}
                </ListGroup>
            </div>
        )
    }
}

export default TraitFilterContainer;