// function fetchData() {
//     const apiKey = ;
//     const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=${apiKey}`;
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => console.error("Error fetching data:", error));
//   }
  
//   setInterval(fetchData, 15000);



//   const apiKey = "Y4KRA5FT77SLUH62"; // Replace with your actual API key
//   const stockListContainer = document.getElementById("stocks");
//   const stockDetailsContainer = document.getElementById("details");

//   // Fetch stock list (you can customize this with your API)
//   async function fetchStockList() {
//     const response = await fetch(
//       `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=apple&apikey=${apiKey}`
//     );
//     const data = await response.json();
//     console.log(data);
    
//     displayStockList(data.bestMatches);
    
//   }

//   // Display stock list in the UI
//   function displayStockList(stocks) {
//     stocks.forEach((stock) => {
//       const button = document.createElement("button");
//       button.textContent = `${stock["1. symbol"]} - ${stock["2. name"]}`;
//       button.onclick = () => fetchStockDetails(stock["1. symbol"]);
//       stockListContainer.appendChild(button);
//     });
//   }

//   // Fetch stock details for a specific symbol
//   async function fetchStockDetails(symbol) {
//     const response = await fetch(
//       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
//     );
//     const data = await response.json();
//     displayStockDetails(data["Global Quote"]);
//   }

//   // Display stock details in the UI
//   function displayStockDetails(details) {
//     if (!details || Object.keys(details).length === 0) {
//       stockDetailsContainer.innerHTML = "<p>No details available.</p>";
//       return;
//     }

//     stockDetailsContainer.innerHTML = `
//       <p><strong>Symbol:</strong> ${details["01. symbol"]}</p>
//       <p><strong>Open:</strong> ${details["02. open"]}</p>
//       <p><strong>High:</strong> ${details["03. high"]}</p>
//       <p><strong>Low:</strong> ${details["04. low"]}</p>
//       <p><strong>Price:</strong> ${details["05. price"]}</p>
//       <p><strong>Volume:</strong> ${details["06. volume"]}</p>
//     `;
//   }

//   // Initialize the app
//   fetchStockList();
  





const apiKey ="cu5mgg1r01qqj8u6uaq0cu5mgg1r01qqj8u6uaqg"


fetch(`https://finnhub.io/api/v1/quote?symbol=.BO&token=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data));

