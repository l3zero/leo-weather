import React, { Component } from 'react'
import '../styles/WeatherApp.css'
const weatherApi = require('../helpers/weatherApi')

export class TodayMainDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { date: this.props.today, latitude: this.props.lat, longitude: this.props.long, todayInfo: null, cityId: this.props.cityId }
    }

    componentDidMount() {
        if (this.state.latitude !== null && this.state.longitude !== null) {
            weatherApi.grabWeather(Math.round(this.state.latitude * 10000) / 10000, Math.round(this.state.longitude * 10000) / 10000).then(info => {
                this.setState({
                    todayInfo: JSON.stringify(info)
                })
            })
        } else if (this.state.cityId !== '') {
            weatherApi.grabWeather(this.state.cityId).then(info => {
                this.setState({
                    todayInfo: JSON.stringify(info)
                })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.cityId !== prevProps.cityId) {
            weatherApi.grabWeather(this.props.cityId).then(info => {
                this.setState({
                    todayInfo: JSON.stringify(info)
                })
            })
        }
    }

    render() {
        return (
            <div className="todayDetails">
                Date from props: {this.state.date}<br></br>
                State details from API call: {this.state.todayInfo}
            </div>
        )
    }
}

export default TodayMainDetails