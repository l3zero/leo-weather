const citiez = require('./../cities.json');
const cityIds = [...citiez];

export function displayMatches(input) {
    let cityObj = [];
    const matchArray = findMatches(input);
    matchArray.sort();

    cityObj = matchArray.map(place => {
        return { 'name': place.name, 'id': place.id };
    })

    return JSON.stringify(cityObj.splice(0, 3));
}

function findMatches(word) {
    return cityIds.filter(place => {
        let regex;
        //Check for letters only and at least 4 letters
        if (word.search(/^[a-zA-Z]/) !== -1 && word.length >= 4) {
            regex = new RegExp(word, 'gi'); //g = global, i = case insensitive
            return place.name.match(regex);
        } else {
            return '';
        }
    });
}

export default displayMatches;