import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Footer extends Component {
    
    render() {
        return (
            <Navbar bg="dark" text='white' className='mt-3'>
                <Container>
                    <Row>
                        <Col>
                            <p className='fw-lighter mt-1'>Made with ❤️ by 
                                <a class="text-decoration-none" href='https://twitter.com/honey_crisp_' target='_blank'> @honeycrisp </a>
                                and 
                                <a class="text-decoration-none" href='https://twitter.com/GatoFlaco9' target='_blank'> @GatoFlaco9 </a>
                            </p>
                        </Col>
                        <Col>
                            <a href='https://www.buymeacoffee.com/honeycrisp' target="_blank">
                                <Image  style={{width: '20%'}} src={process.env.PUBLIC_URL+"/images/bmc.png"} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}

export default Footer;