import React, { Component } from 'react'
import '../styles/WeatherApp.css'
const weatherApi = require('../helpers/weatherApi')
const moment = require('moment')
const data = require('../helpers/dataUtility');

//@TO-DO API data list needs unique keys for each li
export class TodayMainDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { date: moment().format('LLLL'), latitude: this.props.lat, longitude: this.props.long, todayInfo: {}, cityId: this.props.cityId }
    }

    componentDidMount() {
        if (this.state.latitude !== null && this.state.longitude !== null) {
            weatherApi.grabWeather(this.state.latitude, this.state.longitude).then(info => {
                this.setState({
                    todayInfo: info
                })
            })
        } else if (this.state.cityId !== '') {
            weatherApi.grabWeather(this.state.cityId).then(info => {
                this.setState({
                    todayInfo: info
                })
            })
        }
        //Select default tab on DOM load
        document.getElementById("defaultOpen").click()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.cityId !== prevProps.cityId) {
            weatherApi.grabWeather(this.props.cityId).then(info => {
                this.setState({
                    todayInfo: info
                })
            })
        } else if (this.props.lat !== prevProps.lat && this.props.long !== prevProps.long) {
            weatherApi.grabWeather(this.props.lat, this.props.long).then(info => {
                this.setState({
                    todayInfo: info
                })
            })
        }
    }

    //Handles toggling tabs
    openTab(e) {
        e.preventDefault()
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(e.target.innerHTML).style.display = "grid";
        e.currentTarget.className += " active";
    }

    render() {
        return (
            <div className="todayDetails">
                <h2>{this.state.date}</h2>

                <div className="tab">
                    <button id="defaultOpen" className="tablinks" onClick={this.openTab}>Today</button>
                    <button className="tablinks" onClick={this.openTab}>Tomorrow</button>
                    <button className="tablinks" onClick={this.openTab}>Five-Day</button>
                </div>

                <div id="Today" className="tabcontent">
                    <ul className="todayList">
                        {Object.entries(this.state.todayInfo).map(item => <li>{item}</li>)}
                    </ul>
                </div>

                <div id="Tomorrow" className="tabcontent">

                </div>

                <div id="Five-Day" className="tabcontent">

                </div>

            </div>
        )
    }
}

export default TodayMainDetails