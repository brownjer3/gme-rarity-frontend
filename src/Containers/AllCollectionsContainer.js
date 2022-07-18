import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CollectionTableRow from '../Components/CollectionTableRow';

class AllCollectionsContainer extends Component {
    testData = [
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        },
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        },
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        },
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        },
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        },
        { 
            name: "MetaBoy", 
            collectionSize: "10,000",
            volume: "88.15 eth",
            avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc"
        },
        { 
            name: "CYBER CREW", 
            collectionSize: "7",
            volume: "71.4 eth",
            avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e?img-width=large2&img-format=WebP"
        },
        { 
            name: "Bombatomics", 
            collectionSize: "5,000",
            volume: "68.96 eth",
            avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6"
        }
    ];
    
    makeTableRows = () => {
        return this.testData.map((item, index) => {
            return <CollectionTableRow index={index} name={item.name} volume={item.volume} collectionSize={item.collectionSize} image={item.avatarUri}/>
        })
    }

    render() {
        return (
            <Container>
                <Table striped bordered>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Collection (add link)</th>
                        <th>Total Supply</th>
                        <th>Lifetime Volume</th>
                        <th>7-day Volume</th>
                        <th>24hr Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.makeTableRows()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default AllCollectionsContainer;