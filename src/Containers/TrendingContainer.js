import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrendingCollectionCard from '../Components/TrendingCollectionCard'
import Row from 'react-bootstrap/Row';

class TrendingContainer extends Component {

    makeCollectionCards = () => {
        return this.props.topFive.map((collection) => {
            return <TrendingCollectionCard collection={collection} />
        })
    }

    render() {
        return (
            <Row md={5} className="g-4 my-4">
                { this.makeCollectionCards() }
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    const topFive = state.collections.data.slice(0, 5);
    return {
        topFive: topFive
        // loading: state.loading
    }
}

export default connect(mapStateToProps)(TrendingContainer);