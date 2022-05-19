let apiKey = '79705064e49cce04fe6b9253fd2b512d';
location = 'paris';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=fr`;

fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("erreur : " + error);
    });
