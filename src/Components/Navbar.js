import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class TopNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className='mb-3'>
                <Container fluid>
                  <NavLink to='/' className="nav-link">
                      <Navbar.Brand>
                        <img width="75" src={process.env.PUBLIC_URL+"/images/12fps-slower-moon.gif"} />
                      </Navbar.Brand>
                  </NavLink>
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                    <NavLink to='/collections' className="nav-link">
                        All Collections
                    </NavLink>
                  
                    <NavLink to='/contact' className="nav-link">
                        Get in touch
                    </NavLink>
                </Nav>
                <Form className="d-flex">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='bg-dark text-white'>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Find a Collection"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      className="me-2 bg-dark text-white"
                    />
                  </InputGroup>
                </Form>
            </Container>
          </Navbar>
        )
    }
}

export default TopNav;