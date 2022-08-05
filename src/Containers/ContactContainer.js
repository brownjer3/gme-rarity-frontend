import React, { Component } from "react";
import { SectionHeader } from '../Components/Components';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

class ContactContainer extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // submit form info in email to us
    }

    render() {
        return (
            <Container>
                <SectionHeader name='Contact Us'/>
                <Form className="contact-form" >
                    <Row>
                        <Col>
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type='text' placeholder="Ryan Cohen" className='text-white bg-transparent' />
                        </Col>
                        <Col>
                            <Form.Label>Your email</Form.Label>
                            <Form.Control type="email" placeholder="ryan@gamestop.com" className='text-white bg-transparent'/>
                        </Col>
                    </Row>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="We're going to the moon..." className='text-white bg-transparent'/>
                    </Form.Group>
                    <Button variant="outline-danger" type="submit" className="float-end">
                        Send
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default ContactContainer;