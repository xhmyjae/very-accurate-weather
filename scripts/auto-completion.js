function getCities(cityInput)
{
    let nom = citySearched.value;
    const url = `https://geo.api.gouv.fr/communes?nom=${nom}&fields=departement&boost=population&limit=5`;

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let names = [];
            let name;
            for (let i = 0; i < data.length; i++) {
                name = names.push(data[i].nom);
            }
            autocomplete(cityInput, names);
        })
        .catch(error => {
            console.log("erreur : " + error);
        });
}

let citiesList = document.querySelector(".auto-complete-list");

function autocomplete(inp, arr) {
    for (let i = 0; i < arr.length; i++) {
        let cities = document.createElement("span");
        cities.innerHTML = arr[i];
        cities.classList.add("auto-complete-cities");
        citiesList.appendChild(cities);
    }

    let allCities = document.querySelectorAll(".auto-complete-cities");

    allCities.forEach(city => {
       city.addEventListener("click", e => {
           citySearched.value = city.innerHTML;
           citiesList.innerHTML = "";
           API(citySearched.value);
           e.preventDefault();
       });
    });
}

let cityInput = document.getElementById("city-search");

cityInput.addEventListener("keyup", function(event) {
    let allCities = document.querySelectorAll(".auto-complete-cities");
    allCities.forEach(city => {
        city.remove();
    });
    getCities(cityInput);
});


