//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO figure out why readFile not working
//@TO-DO check for empty responses and show appropriate message back
//@TO-DO Convert sunrise / sunset times from unix to local times
const fetch = require("node-fetch");
const apiReq = require('./apiRequest');
const convert = require('./convertJson');

const iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";//replace 10d with your own code from response

module.exports = {
    grabWeather: async (city, coords) => {
        let myRequest, response, jsonData, myData;
        if (coords === undefined) {
            try {
                myRequest = createCityRequest(city);
                response = await fetch(myRequest).then(checkStatus);
                jsonData = await response.json();
                myData = convert.convertJson(jsonData);
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        } else {
            try {
                myRequest = createCoordsRequest(city, coords);
                response = await fetch(myRequest).then(checkStatus);
                jsonData = await response.json();
                myData = convert.convertJson(jsonData);
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        }
        return myData;
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

function createCityRequest(cityId) {
    return new Request(apiReq.cityUrl(cityId), apiReq.getInit());
}

function createCoordsRequest(lat, long) {
    return new Request(apiReq.coordUrl(lat, long), apiReq.getInit());
}
