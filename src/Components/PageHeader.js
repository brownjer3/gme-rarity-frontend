import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
            <h1 class="display-2">{this.props.name}</h1>
        )
    }
}

export default PageHeader;