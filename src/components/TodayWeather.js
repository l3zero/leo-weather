import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails';
import '../styles/WeatherApp.css';
const geoApi = require('../helpers/geolocation');

export class TodayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), coordinates: false, city: false }
    }
    componentDidMount() {
        let coords = geoApi.getCoordinates();
        this.setState({
            coordinates: coords
        });
    }
    render() {
        let today = this.state.date;
        let todayFormat = today.getFullYear() + `-` + (today.getMonth() + 1) + `-` + today.getDate();

        if (true) {
            return (
                <div className="todayWeather">
                    <h2>Today {todayFormat}</h2>
                    <h2>Coordinates from geolocation: {this.state.coordinates}</h2>
                    <TodayMainDetails today={todayFormat} />
                </div>
            )

        } else {
            return null;
        }
    }
}

export default TodayWeather
