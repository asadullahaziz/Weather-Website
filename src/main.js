"use strict";

// Core Modules
const path = require("path");

// NPM Modules
const axios = require("axios");
const express = require("express");

// JS Includes


const app = express();

// let cityName = "12wtf";

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