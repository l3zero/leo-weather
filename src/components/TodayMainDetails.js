import React, { Component } from 'react'
import '../styles/WeatherApp.css'
const weatherApi = require('../helpers/weatherApi')

//@TO-DO API data list needs unique keys for each li
export class TodayMainDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { latitude: this.props.lat, longitude: this.props.long, todayInfo: {}, cityId: this.props.cityId, iconUrl: '' }
    }

    componentDidMount() {
        let lat = this.state.latitude
        let long = this.state.longitude
        let city = this.state.cityId

        if (lat !== null && long !== null) {
            this.getCurrentCoordsWeather(lat, long)
        } else if (city !== '') {
            this.getCurrentCityWeather(city)
        }
        //Select default tab on DOM load
        document.getElementById("defaultOpen").click()
    }

    componentDidUpdate(prevProps, prevState) {
        let city = this.props.cityId
        let prevCity = prevProps.cityId
        let lat = this.props.lat
        let prevLat = prevProps.lat
        let long = this.props.long
        let prevLong = prevProps.long

        if (city !== prevCity) {
            this.getCurrentCityWeather(city)

        } else if (lat !== prevLat && long !== prevLong) {
            this.getCurrentCoordsWeather(lat, long)

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
        document.getElementById(e.target.innerHTML.toLowerCase()).style.display = "initial";
        e.currentTarget.className += " active";
    }

    //Helper functions
    getCurrentCoordsWeather(lat, long) {
        weatherApi.grabCurrentWeather(lat, long).then(info => {
            this.setState({
                todayInfo: info,
                iconUrl: info.iconUrl
            })
        })
    }

    getCurrentCityWeather(city) {
        weatherApi.grabCurrentWeather(city).then(info => {
            this.setState({
                todayInfo: info,
                iconUrl: info.iconUrl
            })
        })
    }

    render() {
        return (
            <div className="todayDetails">

                <div className="tab">
                    <button id="defaultOpen" className="tablinks" onClick={this.openTab}>Today</button>
                    <button className="tablinks" onClick={this.openTab}>Tomorrow</button>
                    <button className="tablinks" onClick={this.openTab}>Five</button>
                </div>

                <div id="today" className="tabcontent">
                    <div className="todayList">
                        {Object.entries(this.state.todayInfo).map(item => <p><img src={require(`../img/${item[0].split(':').join('').trim()}.svg`)} alt="" /><div>{item[1]}</div></p>)}
                    </div>

                    <div className="iconRow">
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                        <img src={this.state.iconUrl} alt="" />
                    </div>

                </div>

                <div id="tomorrow" className="tabcontent">

                </div>

                <div id="five" className="tabcontent">

                </div>

            </div>
        )
    }
}

export default TodayMainDetails