import React, { Component } from 'react';
import './App.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
            <div className="counter">
                <h1>Counter: {this.state.count}</h1>
                <button className='count-button' onClick={this.incrementCount}>Increase Count</button>
            </div>
        );
    }
}
export default Counter;