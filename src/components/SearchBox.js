import React, { Component } from 'react';
import '../styles/WeatherApp.css';
// import displayMatches from '../helpers/searchUtility';
const cityIds = require('./../cities.json');

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.displayMatches = this.displayMatches.bind(this);
        // this.findMatches = this.findMatches.bind(this);
    }

    componentDidMount() {
        const searchInput = document.querySelector('.searchBar');
        const suggestions = document.querySelector('.suggestions');
        console.log(suggestions);
        searchInput.addEventListener('change', this.displayMatches);
        searchInput.addEventListener('keyup', this.displayMatches);
    }


    // displayMatches() {
    //     const matchArray = this.findMatches(this.value);
    //     const html = matchArray.map(place => {
    //         const regex = new RegExp(this.value, 'gi');
    //         const cityName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);

    //         return `<li>${cityName}</li>`;
    //     }).join(''); //The .join turns the newly mapped array into string
    //     this.state.suggestions.innerHTML = html; //Will this use the correct jawn?
    // }

    // findMatches(word) {
    //     return cityIds.filter(place => {
    //         //figure out if the city exists based on search
    //         const regex = new RegExp(word, 'gi'); //g = global, i = case insensitive
    //         return place.name.match(regex);
    //     });
    // }

    render() {
        return (
            <form className="searchForm">
                <input type="text" className="searchBar" placeholder="Enter city..."></input>
                <ul className="suggestions">
                    <li>Filter for a city</li>
                </ul>

            </form>

        )
    }
}

export default SearchBox
