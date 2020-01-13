const fs = require('fs');
const readline = require('readline');
// const cities = require('../city.list.json');
const readInterface = readline.createInterface({
    input: fs.createReadStream('../../openweatherapikey.txt')

});

export function keyz() {
    let res = ''
    readInterface.on('line', function (line) {
        res = line
    });
    readInterface.close()
    return res;
}



// function maker() {

//     let newCities = cities.map(city => {
//         let newCityObj = {};
//         newCityObj['id'] = city.id;
//         newCityObj['name'] = city.name;
//         return newCityObj;
//     })

//     return newCities;
// };

// function writer(newJson) {
//     fs.writeFile('./cities.json', JSON.stringify(newJson), (err) => {
//         if (err) {
//             console.log('error writing new cities json');
//         }
//         // success case, the file was saved
//         console.log('New json file created');
//     });
// }
export default keyz