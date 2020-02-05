module.exports = {
    //For current weather calls
    convertCurrent: (json) => {
        const weather = {
            'City: ': json.name,
            'Temperature: ': `${Math.round(json.main.temp)} ° F`,
            'Humidity: ': `${json.main.humidity} %`,
            'Visibility: ': `${(json.visibility / 1000).toFixed(0)} miles`,
            'WindSpeed: ': `${Math.round(json.wind.speed)} mph`,
            'Sunrise: ': `${timeStamp(json.sys.sunrise)}`,
            'Sunset: ': `${timeStamp(json.sys.sunset)}`
        }
        Object.defineProperty(weather, 'iconUrl', {
            value: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
            enumerable: false
        });

        return weather;
    }
}


function timeStamp(unixTime) {
    //@TO-DO Need to fix local time issue when calculating other countries
    let date = new Date(unixTime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`
}

//Removed following properties: json.main.pressure
//'Description: ': json.weather[0].description,
