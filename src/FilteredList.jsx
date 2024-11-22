import React, { Component } from 'react';
import List from './List';
import { DropdownButton, Dropdown } from 'react-bootstrap'; 
import './App.css';

class FilteredList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search:"",
            type:"All",
        };
    }
    onSearch = (event) => {
        this.setState({search:event.target.value.toLowerCase()});
    }
    filterItem = (item) => {
        return (this.state.type === "All" || item.type === this.state.type) && (item.name.toLowerCase().search(this.state.search) !== -1);
    }
    setType = (eventKey) => {
        this.setState({ type: eventKey });
    };


    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                <DropdownButton id="typeDropdown" title={`Type = ${this.state.type}`} onSelect={this.setType}>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item> <br />
                    <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item> <br />
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                </DropdownButton> <br />
                <input className='search' type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        )
    }
}

export default FilteredList;