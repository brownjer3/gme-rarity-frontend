import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

class HomeContainer extends Component {

    handleLoading = () => {
        if (this.props.loading) {
            return <FontAwesomeIcon className='fa-spin' icon={faCircleNotch} size='10x'/>
        } else {
            return <div>Not loading</div>
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default HomeContainer;