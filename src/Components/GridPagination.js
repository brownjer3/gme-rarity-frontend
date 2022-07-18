import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

class GridPagination extends Component {

    render() {
        return (
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item key='1' active>{1}</Pagination.Item>
                <Pagination.Item key='2' >{2}</Pagination.Item>
                <Pagination.Item key='3' >{3}</Pagination.Item>
                <Pagination.Item key='4' >{4}</Pagination.Item>
                <Pagination.Item key='5' >{5}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        )
    }
}

export default GridPagination;