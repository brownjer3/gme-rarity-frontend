import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class AllCollections extends Component {
    render() {
        return(
            <div>
                <Outlet />
            </div>  
        )
    }
}

export default AllCollections;