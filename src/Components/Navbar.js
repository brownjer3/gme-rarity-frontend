import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

class TopNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                  <NavLink to='/'>
                      <Navbar.Brand>[Logo Placeholder]</Navbar.Brand>
                  </NavLink>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                      <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                      
                        <NavLink to='/collections'>
                          All Collections
                        </NavLink>
                    
                    
                        <NavLink to='/contact'>
                          Get in touch
                        </NavLink>
                    
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Find a Collection"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default TopNav;