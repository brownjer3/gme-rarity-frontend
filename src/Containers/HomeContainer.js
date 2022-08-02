import React, { Component } from 'react';
import TrendingContainer from '../Containers/TrendingContainer';
import HomeBanner from '../Components/HomeBanner';
import { SectionHeader } from '../Components/Components';
import Container from 'react-bootstrap/Container';


class HomeContainer extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container >
                <HomeBanner />
                <SectionHeader name="Trending Container"/>
                <TrendingContainer />
            </Container>
        )
    }
}

export default HomeContainer;