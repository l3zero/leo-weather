//@TO-DO Prolly need to refactor with state / prop storage - only need props
import React, { Component } from 'react'
import '../styles/WeatherApp.css'
import SearchBox from './SearchBox'
import TodayWeather from './TodayWeather'
const gps = require('../helpers/geolocation')

export class WeatherApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityId: '', latitude: null, longitude: null
    }

    this.handleCitySubmit = this.handleCitySubmit.bind(this)
    this.handleGps = this.handleGps.bind(this)

  }

  handleCitySubmit(cityId) {
    this.setState({
      cityId: cityId
    })
  }

  handleGps(e) {
    e.preventDefault()
    gps.getCoordinates().then(pos => {
      this.setState({
        latitude: pos.coords.latitude.toFixed(2),
        longitude: pos.coords.longitude.toFixed(2)
      })
    })
      .catch(err => {
        document.getElementById('gpsTog').innerHTML = err.message
      })
  }

  render() {
    return (
      <div className="weatherApp">
        <div className="weatherTitle"><span>Dude, Weather</span></div>
        <div className="search">
          <SearchBox cityId={this.handleCitySubmit} />
          <button id="gpsTog" onClick={this.handleGps}>Location</button>
        </div>
        <TodayWeather cityId={this.state.cityId} lat={this.state.latitude} long={this.state.longitude} />
      </div>
    )
  }
}

export default WeatherApp