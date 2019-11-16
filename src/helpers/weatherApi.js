//Open Weather Map API - See https://openweathermap.org/current for more info
//@TO-DO figure out why readFile not working
const fetch = require("node-fetch");
const apiReq = require('./apiRequest');
const convert = require('./convertJson');

const iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";//replace 10d with your own code from response
const myRequest = new Request(apiReq.cityUrl('testid'), apiReq.getInit());

module.exports = {
    grabWeather: async () => {
        let response, jsonData, myData;
        try {
            response = await fetch(myRequest).then(checkStatus);
            jsonData = await response.json();
            myData = convert.convertJson(jsonData);
        } catch (error) {
            console.log(JSON.stringify(error));
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
