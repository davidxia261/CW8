import React, {Component} from 'react';
import './App.css';

class HelloWorld extends Component { render() {
    return (
        <h1 className='hello'>Hello, {this.props.name}!</h1>
    );
}}

export default HelloWorld;