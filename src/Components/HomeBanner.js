import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class HomeBanner extends Component {
    render() {
        return(
            <div class="p-5 rounded-lg m-3 d-flex">
                <Row className='align-items-center'>
                    <Col>
                        <Image className='w-50' src={process.env.PUBLIC_URL+"/images/OrdinaryMoon.gif"} />
                    </Col>
                    <Col>
                        <h1 class="display-3">Deep Fungible Value</h1>
                        <p class="lead">
                            The #1 rarity tool for the Gamestop NFT Marketplace
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomeBanner;