module.exports = {
    convertJson: (json) => {
        const weather = {
            'City: ': json.name,
            'Description: ': json.weather[0].description,
            'iconUrl: ': `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
            'Temperature: ': `${json.main.temp} ° F`,
            'Humidity: ': `${json.main.humidity} %`,
            'Visibility: ': `${(json.visibility / 1000).toFixed(0)} miles`,
            'Speed: ': `${Math.round(json.wind.speed)} mph`,
            'Sunrise: ': `${timeStamp(json.sys.sunrise)}`,
            'Sunset: ': `${timeStamp(json.sys.sunset)}`
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