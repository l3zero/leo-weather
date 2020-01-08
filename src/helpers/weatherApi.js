//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO figure out why readFile not working
//@TO-DO check for empty responses and show appropriate message back
//@TO-DO Convert sunrise / sunset times from unix to local times
//@TO-DO Check for cache here before making new requests
const fetch = require('node-fetch');
const nodeCache = require('node-cache');
const apiReq = require('./apiRequest');
const convert = require('./convertJson');

const iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";//replace 10d with your own code from response
const cache = new nodeCache({ stdTTL: 60, maxKeys: 1000000 }) //testing with 60 seconds for now

module.exports = {
    grabWeather: async (cityId, coords) => {
        let myRequest, response, jsonData, myData;
        if (coords === undefined) {
            try {
                if (cache.has(cityId)) {
                    myData = cache.get(cityId)
                    console.log("testing - city data retrieved from cache")
                } else {
                    myRequest = createCityRequest(cityId);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = convert.convertJson(jsonData);
                    cache.set(cityId, myData);
                    console.log("testing - cache city data has been set")
                    console.log(cache.get(cityId))
                    console.log(cache.keys())
                }
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        } else {
            try {
                //Might need to update this key after testing - might be redundant if GPS is used
                if (cache.has(`${cityId}${coords}`)) {
                    myData = cache.get(`${cityId}${coords}`)
                    console.log("testing - coordinate data retrieved from cache")
                } else {
                    myRequest = createCoordsRequest(cityId, coords);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = convert.convertJson(jsonData);
                    cache.set(`${cityId}${coords}`, myData);
                    console.log("testing - cache coords data has been set")

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
