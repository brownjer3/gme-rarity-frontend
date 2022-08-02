import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Overlay from 'react-bootstrap/Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    state = {
        gmeDonationAddress: "0x61942db583EC58f61e7635f40514247E68312625", 
        clicked: false
    }

    handleAddressCopy = () => {
        this.setState({clicked: true})
        navigator.clipboard.writeText(this.state.gmeDonationAddress)
    }

    resetClickState = () => {
        this.setState({clicked: false})
    }
    
    render() {
        return (
            <Navbar bg="dark" text='white' className='mt-auto mb-3 bg-transparent'>
                <Container className="justify-content-center">
                    <Row className="align-items-center w-100">
                        <Col>
                            <p className='font-monospace lh-1'>Made with 🚀 by 
                                <a className="text-decoration-none text-white" href='https://twitter.com/honey_crisp_' target='_blank'> @honeycrisp </a>
                                and 
                                <a className="text-decoration-none text-white" href='https://twitter.com/GatoFlaco9' target='_blank'> @GatoFlaco9 </a>
                            </p>
                            <div className='font-monospace lh-1'>
                                Logos 🎨 by 
                                <a className="text-decoration-none text-white" href='https://twitter.com/_ordinarypat' target='_blank'> @ordinarypat </a>
                            </div>
                        </Col>
                        <Col md="auto">
                            <a href='https://www.buymeacoffee.com/honeycrisp' target="_blank">
                                <Image 
                                    width="125px"
                                    height="auto"
                                    src={process.env.PUBLIC_URL+"/images/bmc.png"} 
                                    alt="Buy Me a Coffe Button for Honeycrisp"
                                />
                            </a>
                            {/* <p class="fw-lighter">GME Wallet: 0x61942db583EC58f61e7635f40514247E68312625</p> */}
                        </Col>
                        <Col>
                            <p className='font-monospace lh-1 pt-3'>
                                <span className='me-1'>GME Wallet: {this.state.gmeDonationAddress}</span>
                                <FontAwesomeIcon 
                                    icon={faCopy} 
                                    beat={this.state.clicked}
                                    className='beat-once'
                                    onClick={this.handleAddressCopy}
                                    onAnimationEnd={() => this.setState({clicked: false})}
                                />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}

export default Footer;