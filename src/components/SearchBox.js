import React, { Component } from 'react'
import '../styles/WeatherApp.css'
import displayMatches from '../helpers/searchUtility'

export class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [], cityName: '', selectedId: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.listClick = this.listClick.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        let searchResults = JSON.parse(displayMatches(e.target.value))
        this.setState({
            cityName: e.target.value,
            suggestions: searchResults
        })
        //Submit is hidden while user is typing
        document.getElementById('searchSubmit').style.display = 'none'

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.cityId(this.state.selectedId)
        //Remove submit button
        document.getElementById('searchSubmit').style.display = 'none'
        //Reset searchBar values
        this.setState({
            cityName: '',
            suggestions: []
        })
    }

    listClick(e) {
        this.setState({
            cityName: e.target.innerHTML,
            selectedId: e.target.getAttribute("id")
        })
        //Submit appears only when a valid entry has been clicked
        document.getElementById('searchSubmit').style.display = 'initial'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input id="searchBar" type="text" value={this.state.cityName} name="cityName" placeholder="Enter city..." onChange={this.handleChange} />

                <input id="searchSubmit" type="submit" value="Submit" />

                <ul className="suggestList">
                    {this.state.suggestions.map(item => <li id={item.id} key={item.id} onClick={this.listClick} >{item.name}</li>)}
                </ul>

            </form>
        )
    }
}

export default SearchBox