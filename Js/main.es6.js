// API key for the project
let API_KEY = "CCR74KYRJKOBCVO8";
let BASE_URL = "https://www.alphavantage.co/query?function=";
  
// Fetch the API and data from ALPHAVANTAGE.co
let fetchStockData = (e) => {
  e.preventDefault();

  let symbolInput = document.querySelector("#symbolInput").value;
  // Fetching stocks data
  fetch(`${BASE_URL}GLOBAL_QUOTE&symbol=${symbolInput}&apikey=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      
     
      displayInfo(document.querySelector(".stocksDisplay"), data);
    })
    .catch((Error) => console.log(Error));
  // Convert JSON data into our variables for usability
  let displayInfo = (document, data) => {
    let {
      "01. symbol": symbol,
      "05. price": price,
      "06. volume": volume,
      "07. latest trading day": date,
      "09. change": change
      
    } = data["Global Quote"];
    // Adding data into html 
    document.querySelector(".price").innerHTML = Number(price);
    document.querySelector(".symbol").innerHTML = symbol;
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".volume").innerHTML = volume;
    document.querySelector(".change").innerHTML = change;
  };
};

//  It trigger the Event from form. 
document.getElementById("stockform").addEventListener("submit", fetchStockData);
