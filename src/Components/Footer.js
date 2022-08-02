import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Footer extends Component {
    
    render() {
        return (
            <Navbar bg="dark" text='white' className='mt-auto'>
                <Container>
                    <Row>
                        <Col>
                            <p className='mt-1 font-monospace lh-1'>Made with 🚀 by 
                                <a class="text-decoration-none text-white" href='https://twitter.com/honey_crisp_' target='_blank'> @honeycrisp </a>
                                and 
                                <a class="text-decoration-none text-white" href='https://twitter.com/GatoFlaco9' target='_blank'> @GatoFlaco9 </a>
                            </p>
                            <div className='font-monospace lh-1'>
                                Logos 🎨 by 
                                <a class="text-decoration-none text-white" href='https://twitter.com/_ordinarypat' target='_blank'> @ordinarypat </a>
                            </div>
                        </Col>
                        <Col>
                            <a href='https://www.buymeacoffee.com/honeycrisp' target="_blank">
                                <Image 
                                    style={{width: '20%'}} 
                                    src={process.env.PUBLIC_URL+"/images/bmc.png"} 
                                    alt="Buy Me a Coffe Button for Honeycrisp"
                                />
                            </a>
                            {/* <p class="fw-lighter">GME Wallet: 0x61942db583EC58f61e7635f40514247E68312625</p> */}
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}

export default Footer;