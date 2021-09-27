"use strict";

// Core Modules
const path = require("path");

// NPM Modules
// const axios = require("axios");
const express = require("express");
const hbs = require("hbs");

// JS Includes


const app = express();
const developmentPort = 3000;

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {title: "Weather App"});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/help", (req) => {
    res.render("help");
});

app.listen(developmentPort, () => {
    console.log("Server is running on port " + developmentPort);
});

// let cityName = "Lahore";

// const apiKey = "0ca7bf4c05d062862a327bd47b544cfe";
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

// axios(url)
//     .then(response => {
//         // if(!response.data.error) {
//         //     let data = response.data;
//         //     console.log(`Temprature in your aread is ${data.main.temp} deg. Celsius`);
//         //     console.log(data);
//         // }
//         // else {
//         //     throw response.data.message;
//         // }
//         console.log(response.data);
//     })
//     .catch(error => {
//         if(error.response.data) {
//             console.log("Error " + error.response.data.cod + ": " + error.response.data.message);
//         }
//         else {
//             console.log(error);
//         }
//     });