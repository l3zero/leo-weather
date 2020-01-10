import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails'
import '../styles/WeatherApp.css'
import getCoordinates from '../helpers/geolocation'

export class TodayWeather extends Component {
    constructor(props) {
        super(props)
        this.state = { latitude: null, longitude: null }
    }

    componentDidMount() {
        getCoordinates().then(pos => {
            this.setState({
                latitude: pos.coords.latitude.toFixed(2),
                longitude: pos.coords.longitude.toFixed(2)
            })
        })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {

        if (!(this.state.latitude === null) || !(this.state.longitude === null) || !(this.props.cityId === '')) {
            return (
                <div className="todayWeather">
                    <TodayMainDetails lat={this.state.latitude} long={this.state.longitude} cityId={this.props.cityId} />
                </div>
            )
        } else {
            return null
        }
    }
}

export default TodayWeather