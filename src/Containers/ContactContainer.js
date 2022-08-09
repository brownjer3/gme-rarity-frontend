import React, { Component } from "react";
import { SectionHeader } from '../Components/Components';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';

class ContactContainer extends Component {
    formSparkUrl = 'https://submit-form.com/ijPyx2Vr'

    state = {
        name: "",
        email: "",
        message: "",
        formSubmitted: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleOnSubmit = async (event) => {
        event.preventDefault();
        this.setState({formSubmitted: true})
        console.log(this.state.name, this.state.email, this.state.message);

        // const formData = new FormData(state);
        // try {
        //     const res = await fetch(this.formSparkUrl, {
        //         method: 'post',
        //         body: 'formData'
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            message: "",
            formSubmitted: false
        })
    }

    render() {
        return (
            <Container>
                <SectionHeader name='Contact Us'/>
                <Alert 
                    variant="success" 
                    show={this.state.formSubmitted}
                    onClose={this.resetForm} 
                    dismissible
                >
                    Message Sent! 
                </Alert>
                <Form className="contact-form" onSubmit={this.handleOnSubmit} >
                    <Row>
                        <Col>
                            <Form.Label>Your name</Form.Label>
                            <Form.Control 
                                name='name'
                                value={this.state.name}
                                type='text'  
                                placeholder="Ryan Cohen" 
                                className='text-white bg-transparent' 
                                onChange={(e) => {this.setState({name: e.target.value})}}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Your email</Form.Label>
                            <Form.Control 
                                name='email'
                                value={this.state.email}
                                type="email" 
                                placeholder="ryan@gamestop.com" 
                                className='text-white bg-transparent' 
                                onChange={(e) => {this.setState({email: e.target.value})}}
                            />
                        </Col>
                    </Row>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control 
                            value={this.state.message}
                            name='message' 
                            as="textarea" 
                            rows={3} 
                            placeholder="We're going to the moon..." 
                            className='text-white bg-transparent' 
                            onChange={(e) => {this.setState({message: e.target.value})}}
                        />
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