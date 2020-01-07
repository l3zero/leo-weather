//@TO-DO Need internal caching, openWeather doesn't allow Cache-Control header
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const units = "&units=imperial";
const apiKey = '6fb4f376b050985122f9f3d746b0f560'; //Pull from file, shouldn't be here
const urlKey = `&appid=${apiKey}`;

const headers = new Headers({
    'Accept': 'application/json'
    // 'Cache-Control': 'public',
    // 'Cache-Control': 'max-age=86400'
});

const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors'
};

module.exports = {

    cityUrl: (id) => {
        return `${weatherUrl}?id=${id}${units}${urlKey}`;
    },

    coordUrl: (lat, long) => {
        let coords = `?lat=${lat}&lon=${long}`;
        return `${weatherUrl}${coords}${units}${urlKey}`;
    },
    getInit: () => {
        return init;
    }
};