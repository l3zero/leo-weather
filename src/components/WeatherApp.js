import React, { Component } from 'react';
import '../styles/WeatherApp.css';
import SearchBox from './SearchBox';
import TodayWeather from './TodayWeather';


export class WeatherApp extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1 className="weatherTitle">Weather Fonts</h1>
        <SearchBox />
        <TodayWeather />
      </div>
    )
  }
}

export default WeatherApp

