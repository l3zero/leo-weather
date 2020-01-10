module.exports = {
    convertJson: (json) => {
        const weather = {
            city: json.name,
            desc: json.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
            temp: `${json.main.temp} ° F`,
            humidity: `${json.main.humidity} %`,
            visibility: `${(json.visibility / 1000).toFixed(0)} mi`,
            speed: `${Math.round(json.wind.speed)}`,
            sunrise: `${timeStamp(json.sys.sunrise)}`,
            sunset: `${timeStamp(json.sys.sunset)}`
        }
        return weather;
    }
}

function timeStamp(unixTime) {
    let date = new Date(unixTime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`
}

//Removed following properties: json.main.pressure