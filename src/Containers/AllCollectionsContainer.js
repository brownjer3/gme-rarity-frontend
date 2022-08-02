import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CollectionTableRow from '../Components/CollectionTableRow';
import { SectionHeader } from '../Components/Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCaretDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { transformUri } from '../Components/DataFormats';

class AllCollectionsContainer extends Component {

    state = {
        collections: [...this.props.collections],
        sortOptions: ["Collection", "Total Supply", "Owner Count",  "Lifetime Volume", "7-day Volume", "24hr Volume"],
        sortTriggers: {"Collection": "name", "Total Supply": "items", "Owner Count": "TBD",  "Lifetime Volume": "volume", "7-day Volume": "volume", "24hr Volume": "volume"},
        sortSelection: "Lifetime Volume",
        sortOrder: "Descending"
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    sortTable = (sortBy) => {
        let sorted = [...this.props.collections]

        const sortValue = this.state.sortTriggers[sortBy];
        
        if (sortValue === "name") {
            return sorted.sort((a, b) => {
                const nameA = a[sortValue].toUpperCase()
                const nameB = b[sortValue].toUpperCase()
                return nameA < nameB ? -1 : 1
            })
        } else if (sortValue !== "items") {
            return sorted.sort((a, b) => {
                return parseInt(b[sortValue]) - parseInt(a[sortValue])
            })
        } else {
            return sorted.sort((a, b) => {
                return b[sortValue] - a[sortValue]
            })
        }
    }
    
    makeTableRows = () => {
        return this.state.collections.map((item, index) => {
            return <CollectionTableRow index={index} slug={item.slug} name={item.name} volume={item.volume} collectionSize={item.items} image={item.avatarUri} ownerCount="TBD"/>
        })
    }

    handleSortChange = (e) => {
        const name = e.target.previousSibling || e.target.parentElement.previousSibling;
        if (this.state.sortSelection == name.id) {
            if (this.state.sortOrder == "Descending") {
                this.setState((prevState) => ({
                    sortOrder: "Ascending", 
                    collections: [...prevState.collections].reverse()
                }))
            } else {
                this.setState((prevState) => ({
                    sortOrder: "Descending",
                    collections: [...prevState.collections].reverse()
                }))
            }
        } else {
            const sortedCollections = this.sortTable(name.id)
            this.setState({collections: sortedCollections, sortSelection: name.id, sortOrder: "Descending"})
        }
    }

    handleSortIcon = (name) => {
        if (this.state.sortSelection == name) {
            if (this.state.sortOrder == "Descending"){
                return <FontAwesomeIcon icon={faCaretDown} className='mx-2 text-warning' onClick={this.handleSortChange}/>
            } else {
                return <FontAwesomeIcon icon={faSortUp} className='mx-2 text-warning' onClick={this.handleSortChange}/>
            }
        } else {
            return <FontAwesomeIcon icon={faSort} className='mx-2' onClick={this.handleSortChange}/>
        }
    }

    makeTableHeaders = () => {
        return this.state.sortOptions.map((option) => {
            if (this.state.sortSelection == option) {
                return (
                    <th>
                        <span className="name text-warning" id={option}>{option}</span>
                        {this.handleSortIcon(option)}
                    </th>
                )
            } else {
                return (
                    <th>
                        <span className="name" id={option}>{option}</span>
                        {this.handleSortIcon(option)}
                    </th>
                )
            }
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

const mapStateToProps = (state) => {
    return {
        collections: state.collections.data,
        loading: state.collections.loading
    }
}


export default connect(mapStateToProps)(AllCollectionsContainer);