import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import displayMatches from '../helpers/searchUtility';

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [], city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listClick = this.listClick.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        // console.log(`${e.target.value} e target value from searchbox child`);
        this.setState({
            city: e.target.value,
            suggestions: displayMatches(e.target.value)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(`${this.state.city} target value from searchbox handleSubmit`);
        this.props.citySubmit(this.state.city);
    }

    listClick(e) {
        this.setState({
            city: e.target.innerHTML
        })
    }

    render() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit}>

                <input type="text" value={this.state.city} name="cityName" className="searchBar" placeholder="Enter city..." onChange={this.handleChange} />

                <input type="submit" value="Submit" />
                <ul className="suggestList" onClick={this.listClick}>
                    {this.state.suggestions.map((item, index) => <li key={index}>{item.slice(0, item.indexOf('-'))}</li>)}
                </ul>

            </form>
        )
    }
}

export default SearchBox
