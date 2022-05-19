let submitBtn = document.querySelector("#search-button");
let citySearched = document.querySelector("#city-search");
let currentLocationName = document.querySelector(".current-location-name");
let weather = document.querySelector(".weather");

submitBtn.addEventListener('click', e => {
    if (citySearched === "") {
        currentLocationName.innerHTML = "No city found";
        weather.classList.add("hide");
    } else {
        API(citySearched.value);
        e.preventDefault();
    }
});

window.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        if (citySearched === "") {
            currentLocationName.innerHTML = "No city found";
            weather.classList.add("hide");
        } else {
            API(citySearched.value);
            e.preventDefault();
        }
    }
});

let temperatureValue = document.querySelector(".temperature-value");
let weatherState = document.querySelector(".weather-state");
let windValue = document.querySelector(".wind-value");
let rainValue = document.querySelector(".rain-value");
let humidityValue = document.querySelector(".humidity-value");
let minTemperature = document.querySelector(".min-temperature");
let maxTemperature = document.querySelector(".max-temperature");

function API(location)
{
    let apiKey = '79705064e49cce04fe6b9253fd2b512d';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.cod === "404") {
                currentLocationName.innerHTML = "No city found";
                weather.classList.add("hide");
            } else {
                currentLocationName.innerHTML = data.name;
                if (weather.classList.contains("hide")) {
                    weather.classList.remove("hide");
                }
                temperatureValue.innerHTML = data.main.temp;
                weatherState.innerHTML = data.weather[0].description;
                windValue.innerHTML = data.wind.speed + " km/h";
                humidityValue.innerHTML = data.main.humidity + "%";
                minTemperature.innerHTML = data.main.temp_min + '°C';
                maxTemperature.innerHTML = data.main.temp_max + '°C';
            }
        })
        .catch(error => {
            console.log("erreur : " + error);
        });
}