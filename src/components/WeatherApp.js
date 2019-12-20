import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import SearchBox from './SearchBox';
import TodayWeather from './TodayWeather';

export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: ''
    }
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
  }

  handleCitySubmit(cityId) {
    this.setState({
      cityId: cityId
    })
  }

  render() {
    return (
      <div className="weatherApp">
        <h1 className="weatherTitle">Weather Fonts</h1>
        <SearchBox cityId={this.handleCitySubmit} />
        <TodayWeather cityId={this.state.cityId} />
      </div>
    )
  }
}

export default WeatherApp

