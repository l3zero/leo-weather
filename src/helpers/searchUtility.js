const cityIds = require('./../cities.json');

export function displayMatches(suggestList) {
    const matchArray = findMatches(this.value);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);

        return `<li>${cityName}</li>`;
    }).join(''); //The .join turns the newly mapped array into string
    suggestList.innerHTML = html; //Will this use the correct jawn?
}

function findMatches(word) {
    return cityIds.filter(place => {
        //figure out if the city exists based on search
        const regex = new RegExp(word, 'gi'); //g = global, i = case insensitive
        return place.name.match(regex);
    });
}

export default displayMatches;