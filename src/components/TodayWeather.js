import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails'
import '../styles/WeatherApp.css'
import getCoordinates from '../helpers/geolocation'

export class TodayWeather extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(), latitude: null, longitude: null }
    }

    componentDidMount() {
        getCoordinates().then(pos => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            })
        })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {
        let today = this.state.date
        let todayFormat = today.getFullYear() + `-` + (today.getMonth() + 1) + `-` + today.getDate()

        if (!(this.state.latitude === null) || !(this.state.longitude === null) || !(this.props.cityId === '')) {
            return (
                <div className="todayWeather">
                    <h2>Today {todayFormat}</h2>
                    <TodayMainDetails today={todayFormat} lat={this.state.latitude} long={this.state.longitude} cityId={this.props.cityId} />
                </div>
            )
        } else {
            return null
        }
    }
}

export default TodayWeather