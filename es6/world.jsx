import React from 'react';

export default class World extends React.Component {
    render() {
        return <h1>World</h1>
    }
}

React.render(<World/>, document.getElementById('world'));
