import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CollectionTableRow from '../Components/CollectionTableRow';
import SectionHeader from '../Components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

class AllCollectionsContainer extends Component {

    state = {
        testData: [
            { 
                name: "really really really really long name example", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc", 
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            },
            { 
                name: "MetaBoy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            },
            { 
                name: "MetaBoy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            },
            { 
                name: "MetaBoy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            },
            { 
                name: "MetaBoy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            },
            { 
                name: "MetaBoy", 
                collectionSize: "10,000",
                volume: "88.15 eth",
                avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
                ownerCount: '6666'
            },
            { 
                name: "CYBER CREW", 
                collectionSize: "7",
                volume: "71.4 eth",
                avatarUri: "https://static.gstop-content.com/2e4e707a-5f7f-4e00-8608-4b9c40a2fa6e",
                ownerCount: '6666'
            },
            { 
                name: "Bombatomics", 
                collectionSize: "5,000",
                volume: "68.96 eth",
                avatarUri: "https://static.gstop-content.com/15f5937e-2d17-4e5a-ac1c-c5e79c285df6",
                ownerCount: '6666'
            }
        ], 
        sortOptions: ["Collection", "Total Supply", "Owner Count",  "Lifetime Volume", "7-day Volume", "24hr Volume"],
        sortSelection: "Lifetime Volume",
        sortOrder: "Descending"
    }
    

    slugifyName = (name) => {
        return name.replaceAll(" ", "-").toLowerCase();
    }
    
    makeTableRows = () => {
        return this.state.testData.map((item, index) => {
            return <CollectionTableRow key={index} index={index} slug={this.slugifyName(item.name)} name={item.name} volume={item.volume} collectionSize={item.collectionSize} image={item.avatarUri} ownerCount={item.ownerCount}/>
        })
    }

    handleSortChange = (e) => {
        const name = e.target.previousSibling || e.target.parentElement.previousSibling;
        if (this.state.sortSelection == name.id) {
            if (this.state.sortOrder == "Descending") {
                this.setState({sortOrder: "Ascending"})
            } else {
                this.setState({sortOrder: "Descending"})
            }
        } else {
            this.setState({sortSelection: name.id, sortOrder: "Descending"})
        }
    }

    handleSortIcon = (name) => {
        if (this.state.sortSelection == name) {
            if (this.state.sortOrder == "Descending"){
                return <FontAwesomeIcon icon={faCaretDown} className='mx-2' onClick={this.handleSortChange}/>
            } else {
                return <FontAwesomeIcon icon={faSortUp} className='mx-2' onClick={this.handleSortChange}/>
            }
        } else {
            return <FontAwesomeIcon icon={faSort} className='mx-2' onClick={this.handleSortChange}/>
        }
    }

    makeTableHeaders = () => {
        return this.state.sortOptions.map((option) => {
            return (
            <th>
                <span class='name' id={option}>{option}</span>
                {this.handleSortIcon(option)}
            </th>
            )
        })
    }

    render() {
        return (
            <Container>
                <SectionHeader name="All Collections"/>
                <Table striped bordered responsive hover className='align-middle' variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            {this.makeTableHeaders()}
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