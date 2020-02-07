//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO check for empty responses and show appropriate message back
const fetch = require('node-fetch');
const nodeCache = require('node-cache');
const apiReq = require('./apiRequest');
const data = require('./dataUtility');
const cache = new nodeCache({ stdTTL: 600, maxKeys: 1000000 }) //In seconds
module.exports = {
    grabCurrentWeather: async (cityId, coords) => {
        let myRequest, response, jsonData, myData;
        if (coords === undefined) {
            try {
                if (cache.has(cityId)) {
                    myData = cache.get(cityId)
                } else {
                    myRequest = createCityRequest(cityId);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = data.convertCurrent(jsonData);
                    cache.set(cityId, myData);
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
                    myData = data.convertCurrent(jsonData);
                    cache.set(`${cityId}_${coords}`, myData);

                }
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        }
        return myData;
    },
    grabFivedayWeather: async (cityId, coords) => {
        let myRequest, response, jsonData, myData;
        if (coords === undefined) {
            try {
                if (cache.has(cityId)) {
                    myData = cache.get(cityId)
                } else {
                    myRequest = createFivedayCityRequest(cityId);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = data.convertFiveday(jsonData);
                    cache.set(cityId, myData);
                }
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        } else {
            try {
                if (cache.has(`${cityId}_${coords}`)) {
                    myData = cache.get(`${cityId}${coords}`)
                } else {
                    myRequest = createFivedayCoordsRequest(cityId, coords);
                    response = await fetch(myRequest).then(checkStatus);
                    jsonData = await response.json();
                    myData = data.convertFiveday(jsonData);
                    cache.set(`${cityId}_${coords}`, myData);

                }
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        }
        return myData;
    },
    grabMap: async (lat, long) => {
        let myRequest, response;
        if (lat !== undefined && long !== undefined) {
            try {
                myRequest = createMapRequest(lat, long);
                response = await fetch(myRequest).then(checkStatus);
            } catch (error) {
                console.log(JSON.stringify(error));
            }

        }
        return response;
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

function createFivedayCityRequest(cityId) {
    return new Request(apiReq.fivedayCityUrl(cityId), apiReq.getInit());
}

function createCoordsRequest(lat, long) {
    return new Request(apiReq.coordUrl(lat, long), apiReq.getInit());
}

function createFivedayCoordsRequest(lat, long) {
    return new Request(apiReq.fivedayCoordUrl(lat, long), apiReq.getInit());
}

function createMapRequest(lat, long) {
    return new Request(apiReq.mapUrl(lat, long), apiReq.getInit());
}
