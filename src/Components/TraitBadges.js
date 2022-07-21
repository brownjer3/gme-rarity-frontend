import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class TraitBadges extends Component {

    createBadges = (traits) => {
        return traits.map(trait => {
            return (
                <Col className='mb-2'>
                    <Badge className='mx-2' bg="light" text='dark'>
                        <span className='d-flex align-items-center trait-badge' id={trait} >
                            {trait}
                            <button type="button" class="btn-close btn-xs ms-1" aria-label="Close" onClick={this.props.handleTraitDeselect}></button> 
                        </span>
                    </Badge>
                </Col>
            )
        })
    }

    render() {
        return (
            <Row >
                {this.createBadges(this.props.selectedTraits)}
            </Row>
        )
    }
}

export default TraitBadges;