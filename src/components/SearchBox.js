import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import displayMatches from '../helpers/searchUtility';

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: `<li>Default suggestion test</li>`, city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // console.log(`${e.target.value} e target value from searchbox child`);
        this.setState({
            city: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(`${this.state.city} target value from searchbox handleSubmit`);
        this.props.citySubmit(this.state.city);
    }

    render() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="cityName" className="searchBar" placeholder="Enter city..." onChange={this.handleChange} onKeyUp={this.handleChange} />

                </label>
                <input type="submit" value="Submit" />
                <ul className="suggestions">
                    {this.state.suggestions}
                </ul>

            </form>

        )
    }
}

export default SearchBox
