import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionCard from '../Components/CollectionCard'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SectionHeader from '../Components/SectionHeader';
import HomeBanner from '../Components/HomeBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

class TrendingContainer extends Component {

    // TOP_FIVE_URL = "http://localhost:3001/topFive"

    // state = {
    //     topFive: []
    // }

    // componentDidMount() {
    //     fetch(this.TOP_FIVE_URL)
    //     .then(res => res.json())
    //     .then(res => this.setState({topFive: res}))
    //     .catch(err => console.log(err))
    // }

    transformUri = (uri) => {
        return uri.replace("public", "https://static.gstop-content.com");
    }

    weiToEth = (wei) => {
        const num = parseInt(wei)
        return Math.round(num / (10**18))
    }

    makeCollectionCards = () => {
        return this.props.topFive.map((item) => {
            return <CollectionCard slug={item.slug} name={item.name} volume={this.weiToEth(item.volume)} collectionSize={item.items} image={this.transformUri(item.avatarUri)}/>
        })
    }

    render() {
        return (
            <Container >
                <HomeBanner />
                <SectionHeader name="Trending Collections"/>
                <Row md={5} className="g-4 my-4">
                { this.makeCollectionCards() }
                </Row>
            </Container>
        );
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