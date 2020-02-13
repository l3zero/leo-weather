//Open Weather Map API - See https://openweathermap.org/current for more info
const fetch = require('node-fetch')
const nodeCache = require('node-cache')
const apiReq = require('./apiRequest')
const data = require('./dataUtility')
const cache = new nodeCache({ stdTTL: 600, maxKeys: 1000000 }) //In seconds

async function grabCurrentWeather(cityId, coords) {
    let myRequest, response, jsonData, myData
    if (coords === undefined) {
        if (cache.has(cityId)) {
            myData = cache.get(cityId)
        } else {
            myRequest = createCityRequest(cityId)
            response = await fetch(myRequest).then(checkStatus)
            jsonData = await response.json()
            myData = data.convertCurrent(jsonData)

            if (myData === undefined) {
                let erz = new Error('MyData conversion failed. Please see dataUtility.js')
                console.log(erz)
                throw erz
            } else {
                cache.set(cityId, myData)
            }
        }
    } else {
        if (cache.has(`${cityId}_${coords}`)) {
            myData = cache.get(`${cityId}${coords}`)
        } else {
            myRequest = createCoordsRequest(cityId, coords)
            response = await fetch(myRequest).then(checkStatus)
            jsonData = await response.json()
            myData = data.convertCurrent(jsonData)

            if (myData === undefined) {
                let erz = new Error('MyData conversion failed. Please see dataUtility.js')
                console.log(erz)
                throw erz
            } else {
                cache.set(`${cityId}_${coords}`, myData)
            }
        }
    }
    return myData
}

async function grabFivedayWeather(cityId, coords) {
    let myRequest, response, jsonData, myData
    if (coords === undefined) {
        if (cache.has(cityId)) {
            myData = cache.get(cityId)
        } else {
            myRequest = createFivedayCityRequest(cityId)
            response = await fetch(myRequest).then(checkStatus)
            jsonData = await response.json()
            myData = data.convertFiveday(jsonData)

            if (myData === undefined) {
                let erz = new Error('MyData conversion failed. Please see dataUtility.js')
                console.log(erz)
                throw erz
            } else {
                cache.set(cityId, myData)
            }
        }
    } else {
        if (cache.has(`${cityId}_${coords}`)) {
            myData = cache.get(`${cityId}${coords}`)
        } else {
            myRequest = createFivedayCoordsRequest(cityId, coords)
            response = await fetch(myRequest).then(checkStatus)
            jsonData = await response.json()
            myData = data.convertFiveday(jsonData)

            if (myData === undefined) {
                let erz = new Error('MyData conversion failed. Please see dataUtility.js')
                console.log(erz)
                throw erz
            } else {
                cache.set(`${cityId}_${coords}`, myData)
            }
        }
    }
    return myData
}

// grabMap: async (lat, long) => {
//     let myRequest, response
//     if (lat !== undefined && long !== undefined) {
//         try {
//             myRequest = createMapRequest(lat, long)
//             response = await fetch(myRequest).then(checkStatus)
//         } catch (error) {
//             console.log(JSON.stringify(error))
//         }

//     }
//     return response
// }

function checkStatus(res) {
    // res.status >= 200 && res.status < 300
    if (res.ok) {
        return res
    } else {
        let erz = new Error(res.statusText)
        console.log(erz)
        throw erz
    }
}

function createCityRequest(cityId) {
    return new Request(apiReq.cityUrl(cityId), apiReq.getInit())
}

function createFivedayCityRequest(cityId) {
    return new Request(apiReq.fivedayCityUrl(cityId), apiReq.getInit())
}

function createCoordsRequest(lat, long) {
    return new Request(apiReq.coordUrl(lat, long), apiReq.getInit())
}

function createFivedayCoordsRequest(lat, long) {
    return new Request(apiReq.fivedayCoordUrl(lat, long), apiReq.getInit())
}

// function createMapRequest(lat, long) {
//     return new Request(apiReq.mapUrl(lat, long), apiReq.getInit())
// }

export { grabCurrentWeather, grabFivedayWeather }