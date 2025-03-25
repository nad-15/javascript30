const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector(`.search`);
const suggestions = document.querySelector(`.suggestions`);

search.addEventListener(`input`, displayResult);

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    .catch(error => console.error("Error fetching data:", error));


//add comma to numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function findMatch(wordToMatch, cities) {
    console.log(wordToMatch);
    if(wordToMatch === "") return suggestions.innerHTML = "";

    return cities
    //Originally used .includes with toLowerCase.. wes bos code is better
        .filter(name => {
            const regex = new RegExp(wordToMatch, "gi");
            return name.city.match(regex) || name.state.match(regex);
        })
}


function displayResult() {
    const match = findMatch(this.value, cities);
    console.log(match);
    if(!match) return;
    const html = match.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;

    // if (!match) return;
    // match.forEach(match => {
    //     const list = document.createElement(`li`);

    //     const cityState = document.createElement(`span`);
    //     const population = document.createElement(`span`);
    //     population.classList.add('population');

    //     cityState.textContent = `${match.city}, ${match.state}`;
    //     population.textContent = match.population;

    //     list.appendChild(cityState);
    //     list.appendChild(population);
    //     suggestions.appendChild(list);
    // });
}



