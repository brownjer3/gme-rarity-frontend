import React, { PureComponent } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown'

class SortDropdown extends PureComponent {
    render() {
        return (
            <div>Sorted by: Rarity</div>
        )
    }

// FUTURE UPDATE FOR SORTING TOGGLE
    // render() {
    //     return(
    //         <div >
    //             <Dropdown>
    //                 <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
    //                 Sort by
    //                 </Dropdown.Toggle>

    //                 <Dropdown.Menu variant="dark">
    //                 <Dropdown.Item href="#/action-1" active>
    //                     Rarity
    //                 </Dropdown.Item>
    //                 <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             </Dropdown>
    //         </div>
    //     )
    // }
}

export default SortDropdown;