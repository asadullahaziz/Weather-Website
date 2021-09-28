import axios from "axios";

function geocode(lat, lon, callback) {
    const apiKey = "0ca7bf4c05d062862a327bd47b544cfe";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

    axios(url)
        .then(response => {
            if(!response.data.cod) {
                let data = response.data;
                console.log(`Temprature in your aread is ${data.main.temp} deg. Celsius`);
                console.log(data);
            }
            else {
                throw response.data.message;
            }
        })
        .catch(error => {
            if(error.response.data) {
                console.log("Error " + error.response.data.cod + ": " + error.response.data.message);
            }
            else {
                console.log(error);
            }
        });
}