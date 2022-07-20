import React, {Component} from 'react';

class SectionHeader extends Component {
    render() {
        return (
            <h1 className="display-2">{this.props.name}</h1>
        )
    }
}

export default SectionHeader;