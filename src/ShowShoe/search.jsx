import React, { Component } from "react";

export default class Search extends Component {
    handleSearch = (event) => {
        this.props.getKeyWord(event.target.value)
    };
    render() {
        return <input type="text" className="form-control" placeholder="Search..." onChange={this.handleSearch} />
    }
}