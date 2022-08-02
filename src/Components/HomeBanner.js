import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomeBanner extends Component {
    render() {
        return(
            <div class="p-5 rounded-lg m-3 d-flex">
                <Row className='align-items-center'>
                    <Col className="main-logo">
                        <video width="640" height="480" autoPlay loop muted playsInline src={process.env.PUBLIC_URL+"/images/final.moon.name.24fps0001-0356.webm"} >
                            <source src="/videos/testing.webm"  type="video/webm" />
                            <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                        </video>
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