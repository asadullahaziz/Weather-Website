const axios = require("axios");

function geocode(address, callback) {
    const apiKey = "pk.eyJ1IjoiYWhtYWRheml6IiwiYSI6ImNrcG52MGd4cjAzNnEycHBiODQwYTU0YjAifQ.xfd6xfvYnhC_AtV5hj6YBQ";
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apiKey}`;
    
    axios(url)
        .then(response => {
            let data = response.data;
            if(data.message) {
                callback(undefined, data.message);
            }
            else if(data.features.length == 0) {
                callback(undefined, "Wrond Adress Given");
            }
            else {
                callback(data.features[1].center, undefined);
            }
        })
        .catch(error => {
            callback(undefined, "Error: Connection Failure! Cannot connect to server.");
        });
}

module.exports = geocode;