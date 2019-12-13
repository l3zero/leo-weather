const citiez = require('./../city.list.json');
const cityIds = [...citiez];

export function displayMatches(input) {
    // console.table(cityIds);
    const matchArray = findMatches(input);
    // matchArray.sort();
    const html = matchArray.map(place => {
        // const regex = new RegExp(input, 'gi');
        // const cityName = place.name.replace(regex, `${input}`);

        return `${place.name}-${place.id}`;
    })
    return html.splice(0, 3);
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