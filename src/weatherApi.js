//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO figure out why readFile not working
//@TO-DO Need internal caching, openWeather doesn't allow Cache-Control header

const fetch = require("node-fetch");
const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = '6fb4f376b050985122f9f3d746b0f560';
const urlKey = `&appid=${apiKey}`;
const cityId = "?id=5110302"; //testing with Brooklyn for now LUL

const myHeaders = new Headers({
    'Accept': 'application/json'
    // 'Cache-Control': 'public',
    // 'Cache-Control': 'max-age=86400'
});

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors'
};

const myRequest = new Request(`${url}${cityId}${urlKey}`, myInit);

module.exports = {
    grabWeather: async () => {
        let response, jsonData;
        try {
            response = await fetch(myRequest).then(checkStatus);
            jsonData = await response.json();
        } catch (error) {
            console.log(JSON.stringify(error));
        }

        return jsonData;
    }

};

function checkStatus(res) {
    // res.status >= 200 && res.status < 300
    if (res.ok) {
        return res;
    } else {
        throw Error(res.statusText);
    }
}
