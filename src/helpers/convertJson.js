module.exports = {
    convertJson: (json) => {
        const weather = {
            city: json.name,
            desc: json.weather.description,
            icon: json.weather.icon,
            temp: json.main.temp,
            pressure: json.main.pressure,
            humidity: json.main.humidity,
            visibility: json.visibility,
            speed: json.wind.speed,
            sunrise: json.sys.sunrise,
            sunset: json.sys.sunset
        }
        return weather;
    }
}