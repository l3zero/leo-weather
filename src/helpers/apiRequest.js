const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather"
const fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast"
const units = "&units=imperial"
const apiKey = process.env.REACT_APP_OPENWEATHER_KEY //Need to test this!!
const urlKey = `&appid=${apiKey}`

const headers = new Headers({
    'Accept': 'application/json'
    // 'Cache-Control': 'public',
    // 'Cache-Control': 'max-age=86400'
})

const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors'
}

module.exports = {

    cityUrl: (id) => {
        return `${currentWeatherUrl}?id=${id}${units}${urlKey}`
    },

    fivedayCityUrl: (id) => {
        return `${fiveDayUrl}?id=${id}${units}${urlKey}`
    },

    coordUrl: (lat, long) => {
        let coords = `?lat=${lat}&lon=${long}`
        return `${currentWeatherUrl}${coords}${units}${urlKey}`
    },
    fivedayCoordUrl: (lat, long) => {
        let coords = `?lat=${lat}&lon=${long}`
        return `${fiveDayUrl}${coords}${units}${urlKey}`
    },
    mapUrl: (lat, long) => {
        //Testing with clouds first
        return `https://tile.openweathermap.org/map/clouds_new/3/${lat}/${long}.png?appid=${apiKey}`
    },
    getInit: () => {
        return init
    }
}
