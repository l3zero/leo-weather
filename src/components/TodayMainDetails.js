import React, { Component } from 'react';
import '../styles/WeatherApp.css';
const weatherApi = require('../helpers/weatherApi');

export class TodayMainDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { date: this.props.today, deetz: "" } //Testing passing props to new component state
    }
    //Testing API call with DEV for now..
    componentDidMount() {
        weatherApi.grabWeather().then(info => {
            this.setState({
                deetz: JSON.stringify(info)
            });
        })

    }

    render() {
        return (
            <div className="todayDetails">
                Date from props: {this.state.date}<br></br>
                State details from test API call: {this.state.deetz}
            </div>
        )
    }
}

export default TodayMainDetails
