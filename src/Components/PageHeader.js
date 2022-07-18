import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
}

export default PageHeader;