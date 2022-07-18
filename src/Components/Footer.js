import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Footer extends Component {
    
    render() {
        return (
            <Navbar bg="light" className='mt-3'>
                <Container className='d-flex align-items-center'>
                    <p className='fw-lighter w-25'>Made with ❤️ by @honeycrisp</p>
                    <a href='https://www.buymeacoffee.com/honeycrisp' target="_blank">
                        <Image className="float-start" style={{width: '15%'}} src={process.env.PUBLIC_URL+"images/bmc.png"} />
                    </a>
                </Container>
            </Navbar>
        )
    }
}

export default Footer;