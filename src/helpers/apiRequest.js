const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const units = "&units=imperial";
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
        return `${weatherUrl}?id=${id}${units}${urlKey}`;
    },

    coordUrl: (lat, long) => {
        let coords = `?lat=${lat}&lon=${long}`;
        return `${weatherUrl}${coords}${units}${urlKey}`;
    },
    mapUrl: (lat, long) => {
        let coords = `?lat=${lat}&lon=${long}`;
        //Testing with clouds first
        return `https://tile.openweathermap.org/map/clouds_new/3/${lat}/${long}.png?appid=${apiKey}`
    },
    getInit: () => {
        return init;
    }
};