"use strict";

// API key for the project
var API_KEY = "CCR74KYRJKOBCVO8";
var BASE_URL = "https://www.alphavantage.co/query?function="; // Fetch the API and data from ALPHAVANTAGE.co

var fetchStockData = function fetchStockData(e) {
  e.preventDefault();
  var symbolInput = document.querySelector("#symbolInput").value; // Fetching stocks data

  fetch("".concat(BASE_URL, "GLOBAL_QUOTE&symbol=").concat(symbolInput, "&apikey=").concat(API_KEY)).then(function (res) {
    return res.json();
  }).then(function (data) {
    displayInfo(document.querySelector(".stocksDisplay"), data);
  })["catch"](function (Error) {
    return console.log(Error);
  }); // Convert JSON data into our variables for usability

  var displayInfo = function displayInfo(document, data) {
    var _data$GlobalQuote = data["Global Quote"],
        symbol = _data$GlobalQuote["01. symbol"],
        price = _data$GlobalQuote["05. price"],
        volume = _data$GlobalQuote["06. volume"],
        date = _data$GlobalQuote["07. latest trading day"],
        change = _data$GlobalQuote["09. change"]; // Adding data into html 

    document.querySelector(".price").innerHTML = Number(price);
    document.querySelector(".symbol").innerHTML = symbol;
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".volume").innerHTML = volume;
    document.querySelector(".change").innerHTML = change;
  };
}; //  It trigger the Event from form. 


document.getElementById("stockform").addEventListener("submit", fetchStockData);
