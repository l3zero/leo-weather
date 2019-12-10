import React, { Component } from 'react';
import '../styles/WeatherApp.css';
const weatherApi = require('../helpers/weatherApi');

export class TodayMainDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { date: this.props.today, latitude: this.props.lat, longitude: this.props.long, deetz: '', city: this.props.city }
    }

    componentDidMount() {
        weatherApi.grabWeather(this.state.latitude, this.state.longitude).then(info => {
            this.setState({
                deetz: JSON.stringify(info)
            });
        })

    }

    render() {
        return (
            <div className="todayDetails">
                Date from props: {this.state.date}<br></br>
                State details from coordinate API call: {this.state.deetz}
            </div>
        )
    }
}

export default TodayMainDetails
