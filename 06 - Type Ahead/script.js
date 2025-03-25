const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector(`.search`);
const suggestions = document.querySelector(`.suggestions`);

search.addEventListener(`input`, filterCity);

let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))


function filterCity() {
    suggestions.innerHTML ="";
    const searchValue = search.value;
    if(!searchValue) return;
    const matchCities = cities.filter(name=> name.city.includes(searchValue) || name.state.includes(searchValue));
    matchCities.forEach(match => {
        const city = document.createElement(`li`);
        city.textContent = match.city;
        suggestions.appendChild(city);
    });
}



