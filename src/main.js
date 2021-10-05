"use strict";

// Core Modules
import { join } from "path";

// NPM Modules
import express, { static } from "express";
import { registerPartials } from "hbs";

// JS Imports
import geocode from "./utilities/geocode";
import weather from "./utilities/weather";

const app = express();
const developmentPort = 3000;

// Define paths for Express Config
const publicDirectoryPath = join(__dirname, "../public");
const viewsPath = join(__dirname, "../templates/views");
const partialsPath = join(__dirname, "../templates/partials");

// set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
registerPartials(partialsPath);


// set up static directory to serve
app.use(static(publicDirectoryPath));

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
                return req.send( {error} );
            }
            else {
                weather(cords[1], cords[2], (weatherForecast, error) =>{
                    if(error) {
                        return req.send({error});
                    }
                    else {
                        req.send(weatherForecast);
                    }
                });
            }
        });
    }
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
