import React, { Component } from 'react'
import TodayMainDetails from './TodayMainDetails';
import '../styles/WeatherApp.css';

export class TodayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    render() {
        let today = this.state.date;
        let todayFormat = today.getFullYear() + `-` + (today.getMonth() + 1) + `-` + today.getDate();

        return (

            <div className="todayWeather">
                <h2>Today {todayFormat}</h2>
                <TodayMainDetails today={todayFormat} />
            </div>
        )
    }
}

export default TodayWeather
