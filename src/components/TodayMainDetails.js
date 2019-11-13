import React, { Component } from 'react';
import '../styles/WeatherApp.css';
const fetch = require("node-fetch");

export class TodayMainDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { date: this.props.today, deetz: "" } //Testing passing props to new component state
    }
    //Testing API call with DEV for now..
    componentDidMount() {
        fetch("https://dev.to/api/articles?tag=javascript&top=3")
            .then(res => res.json()).then(json => {
                this.setState({
                    deetz: JSON.stringify(json[0].url)
                });
            }).catch(err => {
                console.log(err);
            });
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
