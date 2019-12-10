import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import SearchBox from './SearchBox';
import TodayWeather from './TodayWeather';



export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
  }

  handleCitySubmit(cityName) {

    console.log(`${cityName} printing from parent, got from searchbox child`);

  }

  render() {
    return (
      <div className="weatherApp">
        <h1 className="weatherTitle">Weather Fonts</h1>
        <SearchBox citySubmit={this.handleCitySubmit} />
        <TodayWeather />
      </div>
    )
  }
}

export default WeatherApp

