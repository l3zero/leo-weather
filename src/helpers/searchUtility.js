const cityIds = require('./../cities.json');

export function displayMatches(cityName) {
    const matchArray = this.findMatches(cityName);
    const html = matchArray.map(place => {
        const regex = new RegExp(cityName, 'gi');
        const cityName = place.name.replace(regex, `<span class="hl">${cityName}</span>`);

        return `<li>${cityName}</li>`;
    }).join('');
    return html;
}

function findMatches(word) {
    return cityIds.filter(place => {
        //figure out if the city exists based on search
        const regex = new RegExp(word, 'gi'); //g = global, i = case insensitive
        return place.name.match(regex);
    });
}

export default displayMatches;