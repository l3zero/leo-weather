//@TO-DO Need internal caching, openWeather doesn't allow Cache-Control header
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = '6fb4f376b050985122f9f3d746b0f560';
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
        let cityId = "?id=5110302"; //use passed id later, testing for now
        return `${weatherUrl}${cityId}${urlKey}`;
    },

    coordUrl: (lat, lon) => {
        let coords = `?lat=${lat}&lon=${lon}`;
        return `${weatherUrl}${coords}${urlKey}`;
    },
    getInit: () => {
        return init;
    }
};