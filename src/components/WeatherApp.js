import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import SearchBox from './SearchBox';
import TodayWeather from './TodayWeather';

export class WeatherApp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   cityId: this.props.cityId
    // }
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
  }

  //Handles logic to make API call with provided city ID
  handleCitySubmit(cityId) {
    //@TO-DO This logic should be done in TodayWeather.js, passed down as a prop and then in TodayWeather logic will decide if it got coordinates or a cityId
  }

  render() {
    return (
      <div className="weatherApp">
        <h1 className="weatherTitle">Weather Fonts</h1>
        <SearchBox cityId={this.handleCitySubmit} />
        <TodayWeather />
      </div>
    )
  }
}

export default WeatherApp

