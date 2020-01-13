import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails'
import '../styles/WeatherApp.css'

export class TodayWeather extends Component {


    render() {

        if (!(this.props.lat === null) || !(this.props.long === null) || !(this.props.cityId === '')) {
            return (
                <div className="todayWeather">
                    <TodayMainDetails lat={this.props.lat} long={this.props.long} cityId={this.props.cityId} />
                </div>
            )
        } else {
            return null
        }
    }
}

export default TodayWeather