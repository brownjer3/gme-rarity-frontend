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
                        <Image fluid src={process.env.PUBLIC_URL+"/images/dfv-moon.gif"} />
                    </Col>
                    <Col>
                        <h1 class="display-4">The #1 rarity tool for the Gamestop NFT Marketplace</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomeBanner;