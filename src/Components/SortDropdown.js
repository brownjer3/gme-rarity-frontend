import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

class SortDropdown extends Component {
    render() {
        return(
            <div >{/* class='text-end me-4 mb-2' */}
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    Sort by
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                        Rarity
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default SortDropdown;