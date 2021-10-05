"use strict";

// Core Modules
const path = require("path");

// NPM Modules
const express = require("express");
const hbs = require("hbs");

// JS Imports
const geocode = require("./utilities/geocode");
const weather = require("./utilities/weather");

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

// weather Forecast API
app.get("/weather", (req, res) => {
    if(!req.query.address) {
        return res.send({error: "Address Not Provided"});
    }
    else {
        geocode(req.query.address, (cords, error) => {
            if(error) {
                return res.send( {error} );
            }
            else {
                weather(cords[1], cords[0], (weatherForecast, error) =>{
                    if(error) {
                        return res.send({error});
                    }
                    else {
                        res.send(weatherForecast);
                    }
                });
            }
        });
    }
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/help", (req, res) => {
    res.render("help");
});

app.listen(developmentPort, () => {
    console.log("Server is running on port " + developmentPort);
});
