import React, { Component } from 'react';
import CollectionCard from '../Components/CollectionCard'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SectionHeader from '../Components/SectionHeader';
import HomeBanner from '../Components/HomeBanner';

class TrendingContainer extends Component {

    COLLECTIONS_URL = "http://localhost:3001/collections"
    TOP_FIVE_URL = "http://localhost:3001/topFive"

    state = {
        collections: [],
        topFive: []
    }

    componentDidMount() {
        fetch(this.COLLECTIONS_URL)
        .then(res => res.json())
        .then(res => this.setState({collections: res}))
        .catch(err => console.log(err))

        fetch(this.TOP_FIVE_URL)
        .then(res => res.json())
        .then(res => this.setState({topFive: res}))
        .catch(err => console.log(err))
    }

    transformUri = (uri) => {
        return uri.replace("public", "https://static.gstop-content.com");
    }

    weiToEth = (wei) => {
        const num = parseInt(wei)
        return (num / (10**18)).toFixed(2)
    }

    makeCollectionCards = () => {
        return this.state.topFive.map((item) => {
            return <CollectionCard slug={item.slug} name={item.name} volume={this.weiToEth(item.volume)} collectionSize={item.items} image={this.transformUri(item.avatarUri)}/>
        })
    }

    testState = () => {
        console.log(this.state);
    }

    render() {
        return (
            <Container >
                <div onClick={this.testState}>TEST STATE</div>
                <HomeBanner />
                <SectionHeader name="Trending Collections"/>
                <Row md={5} className="g-4 my-4">
                { this.makeCollectionCards() }
                </Row>
            </Container>
        );
    }
}

export default TrendingContainer;