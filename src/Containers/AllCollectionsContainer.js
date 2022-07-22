import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CollectionTableRow from '../Components/CollectionTableRow';
import SectionHeader from '../Components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

class AllCollectionsContainer extends Component {

    COLLECTIONS_URL = "http://localhost:3001/collections"

    state = {
        collections: [], 
        sortOptions: ["Collection", "Total Supply", "Owner Count",  "Lifetime Volume", "7-day Volume", "24hr Volume"],
        sortSelection: "Lifetime Volume",
        sortOrder: "Descending"
    }

    componentDidMount() {
        fetch(this.COLLECTIONS_URL)
        .then(res => res.json())
        .then(res => this.setState({collections: res}))
        .catch(err => console.log(err))
    }


    transformUri = (uri) => {
        return uri.replace("public", "https://static.gstop-content.com");
    }

    weiToEth = (wei) => {
        const num = parseInt(wei)
        return Math.round(num / (10**18))
    }

    // handleFilter = (e) => {
    //     const query = e.target.value
    //     this.setState({collections: () => {
    //         this.state.collections.filter(collection => collection.name.includes(query))
    //     }})
    // }
    
    makeTableRows = () => {
        return this.state.collections.map((item, index) => {
            return <CollectionTableRow index={index} slug={item.slug} name={item.name} volume={this.weiToEth(item.volume)} collectionSize={item.items} image={this.transformUri(item.avatarUri)} ownerCount="TBD"/>
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