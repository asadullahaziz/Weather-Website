"use strict";

const form = document.querySelector("form");
const search = document.querySelector("input");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/weather?address=${search.value}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.error) {
                throw data.error;
            }
            p1.innerHTML = data.forecast;
            p2.innerHTML = data.location
        })
        .catch(error => {
            p1.innerHTML = "ERROR";
            p2.innerHTML = error;
        })
});