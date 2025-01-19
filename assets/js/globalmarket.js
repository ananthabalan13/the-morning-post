const stockData =[
  {
    "id": 1,
    "symbol": "AAPL",
    "companyName": "Apple Inc.",
    "currentPrice": 175.64,
    "openPrice": 173.20,
    "highPrice": 176.50,
    "lowPrice": 172.80,
    "marketCap": 2845000000000,
    "volume": 64320000,
    "peRatio": 28.34,
    "dividendYield": 0.58,
    "sector": "Technology",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 2,
    "symbol": "TSLA",
    "companyName": "Tesla Inc.",
    "currentPrice": 243.87,
    "openPrice": 240.12,
    "highPrice": 245.50,
    "lowPrice": 238.20,
    "marketCap": 772000000000,
    "volume": 48290000,
    "peRatio": 78.45,
    "dividendYield": 0.00,
    "sector": "Automotive",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 3,
    "symbol": "AMZN",
    "companyName": "Amazon.com Inc.",
    "currentPrice": 133.40,
    "openPrice": 132.10,
    "highPrice": 135.20,
    "lowPrice": 131.50,
    "marketCap": 1386000000000,
    "volume": 32800000,
    "peRatio": 65.12,
    "dividendYield": 0.00,
    "sector": "Consumer Discretionary",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 4,
    "symbol": "MSFT",
    "companyName": "Microsoft Corporation",
    "currentPrice": 319.65,
    "openPrice": 315.80,
    "highPrice": 321.20,
    "lowPrice": 314.90,
    "marketCap": 2398000000000,
    "volume": 40230000,
    "peRatio": 33.01,
    "dividendYield": 0.85,
    "sector": "Technology",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 5,
    "symbol": "GOOGL",
    "companyName": "Alphabet Inc.",
    "currentPrice": 142.15,
    "openPrice": 140.90,
    "highPrice": 143.80,
    "lowPrice": 140.20,
    "marketCap": 1784000000000,
    "volume": 28940000,
    "peRatio": 27.65,
    "dividendYield": 0.00,
    "sector": "Communication Services",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 6,
    "symbol": "NFLX",
    "companyName": "Netflix Inc.",
    "currentPrice": 432.90,
    "openPrice": 428.30,
    "highPrice": 435.60,
    "lowPrice": 425.00,
    "marketCap": 193000000000,
    "volume": 18760000,
    "peRatio": 42.18,
    "dividendYield": 0.00,
    "sector": "Communication Services",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 7,
    "symbol": "NVDA",
    "companyName": "NVIDIA Corporation",
    "currentPrice": 490.50,
    "openPrice": 485.00,
    "highPrice": 495.20,
    "lowPrice": 483.00,
    "marketCap": 1208000000000,
    "volume": 39230000,
    "peRatio": 94.12,
    "dividendYield": 0.04,
    "sector": "Technology",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 8,
    "symbol": "META",
    "companyName": "Meta Platforms Inc.",
    "currentPrice": 287.25,
    "openPrice": 283.10,
    "highPrice": 289.60,
    "lowPrice": 281.90,
    "marketCap": 790000000000,
    "volume": 35000000,
    "peRatio": 34.02,
    "dividendYield": 0.00,
    "sector": "Communication Services",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 9,
    "symbol": "BABA",
    "companyName": "Alibaba Group",
    "currentPrice": 98.30,
    "openPrice": 96.50,
    "highPrice": 99.80,
    "lowPrice": 95.80,
    "marketCap": 267000000000,
    "volume": 22130000,
    "peRatio": 20.75,
    "dividendYield": 0.00,
    "sector": "Consumer Discretionary",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 10,
    "symbol": "JPM",
    "companyName": "JPMorgan Chase & Co.",
    "currentPrice": 142.78,
    "openPrice": 141.20,
    "highPrice": 144.00,
    "lowPrice": 140.80,
    "marketCap": 415000000000,
    "volume": 17320000,
    "peRatio": 11.24,
    "dividendYield": 2.92,
    "sector": "Financials",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 11,
    "symbol": "WMT",
    "companyName": "Walmart Inc.",
    "currentPrice": 153.80,
    "openPrice": 152.40,
    "highPrice": 154.90,
    "lowPrice": 151.80,
    "marketCap": 415000000000,
    "volume": 9700000,
    "peRatio": 23.90,
    "dividendYield": 1.48,
    "sector": "Consumer Staples",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 12,
    "symbol": "CVX",
    "companyName": "Chevron Corporation",
    "currentPrice": 164.30,
    "openPrice": 162.50,
    "highPrice": 165.40,
    "lowPrice": 161.80,
    "marketCap": 310000000000,
    "volume": 14700000,
    "peRatio": 10.12,
    "dividendYield": 3.85,
    "sector": "Energy",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 13,
    "symbol": "KO",
    "companyName": "Coca-Cola Co.",
    "currentPrice": 62.10,
    "openPrice": 61.80,
    "highPrice": 62.50,
    "lowPrice": 61.40,
    "marketCap": 268000000000,
    "volume": 13380000,
    "peRatio": 26.72,
    "dividendYield": 3.00,
    "sector": "Consumer Staples",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 14,
    "symbol": "PFE",
    "companyName": "Pfizer Inc.",
    "currentPrice": 40.20,
    "openPrice": 39.90,
    "highPrice": 40.70,
    "lowPrice": 39.40,
    "marketCap": 225000000000,
    "volume": 28200000,
    "peRatio": 7.98,
    "dividendYield": 4.19,
    "sector": "Healthcare",
    "lastUpdated": "2025-01-19T10:30:00Z"
  },
  {
    "id": 15,
    "symbol": "T",
    "companyName": "AT&T Inc.",
    "currentPrice": 19.85,
    "openPrice": 19.60,
    "highPrice": 20.10,
    "lowPrice": 19.50,
    "marketCap": 141000000000,
    "volume": 29000000,
    "peRatio": 7.25,
    "dividendYield": 7.47,
    "sector": "Communication Services",
    "lastUpdated": "2025-01-19T10:30:00Z"
  }
]

const addedStocks = new Set()
const stockDetailsDiv = document.querySelector(".stockDetails")

stockData.forEach((stock) =>{
  const stocks =`
    <div class="stocks" data-id=${stock.id}>
                <h2>${stock.symbol}</h2>
                <div class="stock-details">
                    <h3>${stock.currentPrice}</h3>
                    <p>${stock.peRatio}%</p>
                </div>
            </div>

  `  
  stockDetailsDiv.innerHTML +=stocks
})
const stocks = document.querySelectorAll(".stocks")
console.log(stocks);


// const stockName =document.querySelector(".stockName")
// const companyName =document.querySelector(".companyName")
// const stockPrice =document.querySelector(".stockPrice")
// const volume =document.querySelector(".volume")
// const dayLow =document.querySelector(".dayLow")
// const dayHigh =document.querySelector(".dayHigh")
const body = document.querySelector(".tableBody")

stocks.forEach((stock,i)=>{
  stock.addEventListener("click",()=>{
    const id = stock.getAttribute("data-id")
    const data = stockData.find((obj) => obj.id == id);
    console.log(i);

const exisitingRow=document.querySelector(`tr[data-id="${id}"]`)

if (exisitingRow) {
  body.removeChild(exisitingRow)
}
else{
       const tr = document.createElement("tr")
       tr.setAttribute("data-id",id)
      tr.innerHTML=`
                  <td class="stockName">${data.symbol}</td>
                  <td class="companyName">${data.companyName}</td>
                  <td class="stockPrice">${data.currentPrice}</td>
                  <td class="volume">${data.volume}</td>
                  <td class="dayLow" style="color: red;">${data.lowPrice}</td>
                  <td class="dayHigh" style="color: green;">${data.highPrice}</td>
      `
      console.log(tr);
      if (body.firstChild) {
        body.insertBefore(tr ,body.firstChild)
      }
    
    else{
      alert("Something went wrong")
    }
  }
  })
})
