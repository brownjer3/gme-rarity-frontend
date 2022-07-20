import React, { Component } from 'react';
import CollectionCard from '../Components/CollectionCard'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SectionHeader from '../Components/SectionHeader';
import HomeBanner from '../Components/HomeBanner';

class TrendingContainer extends Component {

    state = {
        testData: [
            { 
                name: "MetaBoy",
                slug: "metaboy",
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
            },
            { 
                name: "CYBER CREW [C4]", 
                slug: "cyber-crew-c4",
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
            },
            { 
                name: "Bombatomics",
                slug: "bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
            },
            { 
                name: "MetaBoy", 
                slug: "metaboy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
            },
            { 
                name: "CYBER CREW [C4]", 
                slug: "cyber-crew-c4",
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
            }
        ]
    }
    

    getCollections = () => {
        return this.state.testData.map((item, index) => {
            return <CollectionCard key={index} slug={item.slug} name={item.name} volume={item.volume} collectionSize={item.collectionSize} image={item.avatarUri}/>
        })
    }

    render() {
        return (
            <Container >
                <HomeBanner />
                <SectionHeader name="Trending Collections"/>
                <Row md={5} className="g-4">
                { this.getCollections() }
                </Row>
            </Container>
        );
    }
}

export default TrendingContainer;