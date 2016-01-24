import React from 'react';
var ReactDOM = require('react-dom');

export default class Hello extends React.Component {
    render() {
        return <h1>Hello You</h1>
    }
}

React.render(<Hello/>, document.getElementById('hello'));