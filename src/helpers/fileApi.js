const fs = require('fs');
const cities = require('./../city.list.json');

function maker() {

    let newCities = cities.map(city => {
        let newCityObj = {};
        newCityObj['id'] = city.id;
        newCityObj['name'] = city.name;
        return newCityObj;
    })

    return newCities;
};

// (function tester() {
//     console.log(newCities.find(city => city.name === 'Brooklyn'));
// })();

function writer(newJson) {
    fs.writeFile('./cities.json', JSON.stringify(newJson), (err) => {
        if (err) {
            console.log('error writing new cities json');
        }
        // success case, the file was saved
        console.log('New json file created');
    });
}