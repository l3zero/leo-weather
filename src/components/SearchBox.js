import React, { Component } from 'react';
import '../styles/WeatherApp.css';

export class SearchBox extends Component {
    render() {
        return (

            <div className="mdc-text-field mdc-text-field--outlined searchBar">
                <input className="mdc-text-field__input" id="text-field-hero-input"></input>
                <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading"></div>
                    <div className="mdc-notched-outline__notch">
                        <label for="text-field-hero-input" className="mdc-floating-label"></label>
                    </div>
                    <div className="mdc-notched-outline__trailing"></div>
                </div>
            </div>

        )
    }
}

export default SearchBox
