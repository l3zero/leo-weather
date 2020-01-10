//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO figure out why readFile not working
//@TO-DO check for empty responses and show appropriate message back
const fetch = require('node-fetch');
const nodeCache = require('node-cache');
const apiReq = require('./apiRequest');
const convert = require('./convertJson');
const cache = new nodeCache({ stdTTL: 600, maxKeys: 1000000 }) //keeps same weather for 10 mins
module.exports = {
    grabWeather: async (cityId, coords) => {
        let myRequest, response, jsonData, myData;
        if (coords === undefined) {
            try {
                if (cache.has(cityId)) {
                    myData = cache.get(cityId)
                } else {
                    myRequest = createCityRequest(cityId);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = convert.convertJson(jsonData);
                    cache.set(cityId, myData);
                    console.log("testing - cache city data has been set")
                }
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        } else {
            try {
                if (cache.has(`${cityId}_${coords}`)) {
                    myData = cache.get(`${cityId}${coords}`)
                } else {
                    myRequest = createCoordsRequest(cityId, coords);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = convert.convertJson(jsonData);
                    cache.set(`${cityId}_${coords}`, myData);

                }
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
