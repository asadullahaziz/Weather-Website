const axios = require("axios");

function weather(lat, lon, callback) {
    const apiKey = "0ca7bf4c05d062862a327bd47b544cfe";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios(url)
        .then(response => {
            let data = response.data;
            let weatherForecast = {
                forecast: `It is ${data.main.temp}°C with Humidity of ${data.main.humidity}%`,
                location: `${data.name}, ${data.sys.country}`
            };
            callback(weatherForecast, undefined);
        })
        .catch(error => {
            if(error.response) {
                callback(undefined, error.response.data.message);
            }
            else {
                callback (undefined, "cannot connect to the server.")
            }
        });
}

module.exports = weather;