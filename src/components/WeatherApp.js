import React, { Component } from 'react';
import '../WeatherApp.css';
import SearchBox from './SearchBox';


export class WeatherApp extends Component {
  render() {
    return (
      <div>
        <h1 className="weatherTitle">Leo's Weather</h1>
        <SearchBox />
      </div>
    )
  }
}

export default WeatherApp

