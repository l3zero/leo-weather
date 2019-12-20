import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails';
import '../styles/WeatherApp.css';
import getCoordinates from '../helpers/geolocation';

export class TodayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), latitude: null, longitude: null, cityId: this.props.cityId }
    }
    componentDidMount() {
        getCoordinates().then(pos => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            })
        })
            .catch(err => {
                console.log(err.message);
            })

    }

    // componentDidUpdate() {
    //     this.setState({
    //         cityId: this.props.cityId
    //     })
    // }

    render() {
        let today = this.state.date;
        let todayFormat = today.getFullYear() + `-` + (today.getMonth() + 1) + `-` + today.getDate();

        // if (!(this.state.latitude === null) || !(this.state.longitude === null)) {
        return (
            <div className="todayWeather">
                <h2>Today {todayFormat}</h2>
                <h2>Coordinates from geolocation: {this.state.latitude}, {this.state.longitude}</h2>
                <TodayMainDetails today={todayFormat} lat={this.state.latitude} long={this.state.longitude} cityId={this.props.cityId} />
            </div>
        )


    }
}


export default TodayWeather