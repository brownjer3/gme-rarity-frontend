import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import SectionHeader from "../Components/SectionHeader";

class ContactContainer extends Component {
    render() {
        return (
            <Container className='px-5'>
                <SectionHeader name='Contact Us'/>
                <Form className="text-start" >
                    <Row>
                        <Col>
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type='text' placeholder="Vitalik Buterin" />
                        </Col>
                        <Col>
                            <Form.Label>Your email</Form.Label>
                            <Form.Control type="email" placeholder="Vitalik@Ethereum.org" />
                        </Col>
                    </Row>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="We're going to the moon..."/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default ContactContainer;