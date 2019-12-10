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
        //figure out if the city exists based on search
        const regex = new RegExp(word, 'gi'); //g = global, i = case insensitive
        return place.name.match(regex);
    });
}

export default displayMatches;