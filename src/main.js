"use strict";

// Core Modules
import { join } from "path";

// NPM Modules
import express, { static } from "express";
import { registerPartials } from "hbs";

// JS Includes


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

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/help", (req) => {
    res.render("help");
});

app.listen(developmentPort, () => {
    console.log("Server is running on port " + developmentPort);
});
