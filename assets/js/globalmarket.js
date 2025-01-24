const stockData = [
  {
    id: 1,
    symbol: "AAPL",
    companyName: "Apple Inc.",
    currentPrice: 175.64,
    openPrice: 173.2,
    highPrice: 176.5,
    lowPrice: 172.8,
    marketCap: 2845000000000,
    volume: 64320000,
    peRatio: 28.34,
    dividendYield: 0.58,
    sector: "Technology",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 2,
    symbol: "TSLA",
    companyName: "Tesla Inc.",
    currentPrice: 243.87,
    openPrice: 240.12,
    highPrice: 245.5,
    lowPrice: 238.2,
    marketCap: 772000000000,
    volume: 48290000,
    peRatio: 78.45,
    dividendYield: 0.0,
    sector: "Automotive",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 3,
    symbol: "AMZN",
    companyName: "Amazon.com Inc.",
    currentPrice: 133.4,
    openPrice: 132.1,
    highPrice: 135.2,
    lowPrice: 131.5,
    marketCap: 1386000000000,
    volume: 32800000,
    peRatio: 65.12,
    dividendYield: 0.0,
    sector: "Consumer Discretionary",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 4,
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    currentPrice: 319.65,
    openPrice: 315.8,
    highPrice: 321.2,
    lowPrice: 314.9,
    marketCap: 2398000000000,
    volume: 40230000,
    peRatio: 33.01,
    dividendYield: 0.85,
    sector: "Technology",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 5,
    symbol: "GOOGL",
    companyName: "Alphabet Inc.",
    currentPrice: 142.15,
    openPrice: 140.9,
    highPrice: 143.8,
    lowPrice: 140.2,
    marketCap: 1784000000000,
    volume: 28940000,
    peRatio: 27.65,
    dividendYield: 0.0,
    sector: "Communication Services",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 6,
    symbol: "NFLX",
    companyName: "Netflix Inc.",
    currentPrice: 432.9,
    openPrice: 428.3,
    highPrice: 435.6,
    lowPrice: 425.0,
    marketCap: 193000000000,
    volume: 18760000,
    peRatio: 42.18,
    dividendYield: 0.0,
    sector: "Communication Services",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 7,
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    currentPrice: 490.5,
    openPrice: 485.0,
    highPrice: 495.2,
    lowPrice: 483.0,
    marketCap: 1208000000000,
    volume: 39230000,
    peRatio: 94.12,
    dividendYield: 0.04,
    sector: "Technology",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 8,
    symbol: "META",
    companyName: "Meta Platforms Inc.",
    currentPrice: 287.25,
    openPrice: 283.1,
    highPrice: 289.6,
    lowPrice: 281.9,
    marketCap: 790000000000,
    volume: 35000000,
    peRatio: 34.02,
    dividendYield: 0.0,
    sector: "Communication Services",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 9,
    symbol: "BABA",
    companyName: "Alibaba Group",
    currentPrice: 98.3,
    openPrice: 96.5,
    highPrice: 99.8,
    lowPrice: 95.8,
    marketCap: 267000000000,
    volume: 22130000,
    peRatio: 20.75,
    dividendYield: 0.0,
    sector: "Consumer Discretionary",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 10,
    symbol: "JPM",
    companyName: "JPMorgan Chase & Co.",
    currentPrice: 142.78,
    openPrice: 141.2,
    highPrice: 144.0,
    lowPrice: 140.8,
    marketCap: 415000000000,
    volume: 17320000,
    peRatio: 11.24,
    dividendYield: 2.92,
    sector: "Financials",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 11,
    symbol: "WMT",
    companyName: "Walmart Inc.",
    currentPrice: 153.8,
    openPrice: 152.4,
    highPrice: 154.9,
    lowPrice: 151.8,
    marketCap: 415000000000,
    volume: 9700000,
    peRatio: 23.9,
    dividendYield: 1.48,
    sector: "Consumer Staples",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 12,
    symbol: "CVX",
    companyName: "Chevron Corporation",
    currentPrice: 164.3,
    openPrice: 162.5,
    highPrice: 165.4,
    lowPrice: 161.8,
    marketCap: 310000000000,
    volume: 14700000,
    peRatio: 10.12,
    dividendYield: 3.85,
    sector: "Energy",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 13,
    symbol: "KO",
    companyName: "Coca-Cola Co.",
    currentPrice: 62.1,
    openPrice: 61.8,
    highPrice: 62.5,
    lowPrice: 61.4,
    marketCap: 268000000000,
    volume: 13380000,
    peRatio: 26.72,
    dividendYield: 3.0,
    sector: "Consumer Staples",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 14,
    symbol: "PFE",
    companyName: "Pfizer Inc.",
    currentPrice: 40.2,
    openPrice: 39.9,
    highPrice: 40.7,
    lowPrice: 39.4,
    marketCap: 225000000000,
    volume: 28200000,
    peRatio: 7.98,
    dividendYield: 4.19,
    sector: "Healthcare",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
  {
    id: 15,
    symbol: "T",
    companyName: "AT&T Inc.",
    currentPrice: 19.85,
    openPrice: 19.6,
    highPrice: 20.1,
    lowPrice: 19.5,
    marketCap: 141000000000,
    volume: 29000000,
    peRatio: 7.25,
    dividendYield: 7.47,
    sector: "Communication Services",
    lastUpdated: "2025-01-19T10:30:00Z",
  },
];

const addedStocks = new Set();
const stockDetailsDiv = document.querySelector(".stockDetails");

// trndingStock showing function without api
stockData.forEach((stock) => {
  const stocks = `
    <div class="stocks" data-id=${stock.id}>
                <h2>${stock.symbol}</h2>
                <div class="stock-details">
                    <h3>${stock.currentPrice}</h3>
                    <p>${stock.peRatio}%</p>
                </div>
            </div>

  `;
  stockDetailsDiv.innerHTML += stocks;
});
const stocks = document.querySelectorAll(".stocks");

const topGainersLosersData = {
  metadata: "Top gainers, losers, and most actively traded US tickers",
  last_updated: "2025-01-21 16:15:59 US/Eastern",
  top_gainers: [
    {
      ticker: "MSSAW",
      price: "0.0439",
      change_amount: "0.0336",
      change_percentage: "326.2136%",
      volume: "12199",
    },
    {
      ticker: "AERTW",
      price: "0.0495",
      change_amount: "0.0275",
      change_percentage: "125.0%",
      volume: "200",
    },
    {
      ticker: "RDW+",
      price: "11.0",
      change_amount: "5.47",
      change_percentage: "98.915%",
      volume: "626818",
    },
    {
      ticker: "ASST",
      price: "0.9",
      change_amount: "0.4371",
      change_percentage: "94.4264%",
      volume: "265036829",
    },
    {
      ticker: "VATE",
      price: "9.48",
      change_amount: "4.37",
      change_percentage: "85.5186%",
      volume: "30841058",
    },
    {
      ticker: "SST+",
      price: "0.0556",
      change_amount: "0.0254",
      change_percentage: "84.106%",
      volume: "62086",
    },
    {
      ticker: "RELIW",
      price: "0.0349",
      change_amount: "0.0144",
      change_percentage: "70.2439%",
      volume: "6531",
    },
    {
      ticker: "DWTX",
      price: "3.15",
      change_amount: "1.28",
      change_percentage: "68.4492%",
      volume: "24154466",
    },
    {
      ticker: "USEG",
      price: "3.79",
      change_amount: "1.47",
      change_percentage: "63.3621%",
      volume: "105325688",
    },
    {
      ticker: "GDEVW",
      price: "0.0482",
      change_amount: "0.0182",
      change_percentage: "60.6667%",
      volume: "1",
    },
    {
      ticker: "DOGZ",
      price: "28.76",
      change_amount: "10.66",
      change_percentage: "58.895%",
      volume: "1970699",
    },
    {
      ticker: "IVCAW",
      price: "0.0243",
      change_amount: "0.009",
      change_percentage: "58.8235%",
      volume: "94906",
    },
    {
      ticker: "RGTIW",
      price: "6.55",
      change_amount: "2.4",
      change_percentage: "57.8313%",
      volume: "2511910",
    },
    {
      ticker: "PIIIW",
      price: "0.0191",
      change_amount: "0.0068",
      change_percentage: "55.2846%",
      volume: "5548",
    },
    {
      ticker: "AIMAW",
      price: "0.033",
      change_amount: "0.0116",
      change_percentage: "54.2056%",
      volume: "74939",
    },
    {
      ticker: "RDW",
      price: "22.36",
      change_amount: "7.61",
      change_percentage: "51.5932%",
      volume: "10475799",
    },
    {
      ticker: "MACIW",
      price: "0.2499",
      change_amount: "0.0849",
      change_percentage: "51.4545%",
      volume: "2930",
    },
    {
      ticker: "APCXW",
      price: "0.21",
      change_amount: "0.07",
      change_percentage: "50.0%",
      volume: "1420",
    },
    {
      ticker: "GGROW",
      price: "0.0298",
      change_amount: "0.0098",
      change_percentage: "49.0%",
      volume: "40046",
    },
    {
      ticker: "TPET",
      price: "2.64",
      change_amount: "0.86",
      change_percentage: "48.3146%",
      volume: "45574590",
    },
  ],
  top_losers: [
    {
      ticker: "GOEVW",
      price: "0.0084",
      change_amount: "-0.0223",
      change_percentage: "-72.6384%",
      volume: "4805769",
    },
    {
      ticker: "GOEV",
      price: "0.3701",
      change_amount: "-0.9799",
      change_percentage: "-72.5852%",
      volume: "41737637",
    },
    {
      ticker: "SHOTW",
      price: "0.1094",
      change_amount: "-0.0986",
      change_percentage: "-47.4038%",
      volume: "18658",
    },
    {
      ticker: "IMTXW",
      price: "0.04",
      change_amount: "-0.0335",
      change_percentage: "-45.5782%",
      volume: "25106",
    },
    {
      ticker: "MOBBW",
      price: "0.3237",
      change_amount: "-0.1963",
      change_percentage: "-37.75%",
      volume: "23957",
    },
    {
      ticker: "DSX+",
      price: "0.096",
      change_amount: "-0.0566",
      change_percentage: "-37.0904%",
      volume: "93623",
    },
    {
      ticker: "ORKT",
      price: "0.7069",
      change_amount: "-0.4131",
      change_percentage: "-36.8839%",
      volume: "7564639",
    },
    {
      ticker: "AMODW",
      price: "0.052",
      change_amount: "-0.028",
      change_percentage: "-35.0%",
      volume: "88307",
    },
    {
      ticker: "ILLRW",
      price: "0.13",
      change_amount: "-0.07",
      change_percentage: "-35.0%",
      volume: "256412",
    },
    {
      ticker: "TNONW",
      price: "0.013",
      change_amount: "-0.0068",
      change_percentage: "-34.3434%",
      volume: "21412",
    },
    {
      ticker: "CSLMR",
      price: "0.12",
      change_amount: "-0.0621",
      change_percentage: "-34.1021%",
      volume: "680",
    },
    {
      ticker: "VLN+",
      price: "0.0714",
      change_amount: "-0.0365",
      change_percentage: "-33.8276%",
      volume: "11600",
    },
    {
      ticker: "NRXPW",
      price: "0.2",
      change_amount: "-0.0991",
      change_percentage: "-33.1327%",
      volume: "34883",
    },
    {
      ticker: "MTEKW",
      price: "0.689",
      change_amount: "-0.341",
      change_percentage: "-33.1068%",
      volume: "66773",
    },
    {
      ticker: "ZCARW",
      price: "0.0152",
      change_amount: "-0.0073",
      change_percentage: "-32.4444%",
      volume: "8236",
    },
    {
      ticker: "SLDPW",
      price: "0.1752",
      change_amount: "-0.084",
      change_percentage: "-32.4074%",
      volume: "116360",
    },
    {
      ticker: "KLTOW",
      price: "0.041",
      change_amount: "-0.019",
      change_percentage: "-31.6667%",
      volume: "8242",
    },
    {
      ticker: "GFAIW",
      price: "0.21",
      change_amount: "-0.0903",
      change_percentage: "-30.0699%",
      volume: "39049",
    },
    {
      ticker: "SDSTW",
      price: "0.21",
      change_amount: "-0.09",
      change_percentage: "-30.0%",
      volume: "1308",
    },
    {
      ticker: "HEPA",
      price: "0.3218",
      change_amount: "-0.1366",
      change_percentage: "-29.7993%",
      volume: "1647529",
    },
  ],
  most_actively_traded: [
    {
      ticker: "GCTK",
      price: "0.125",
      change_amount: "0.0401",
      change_percentage: "47.232%",
      volume: "606637611",
    },
    {
      ticker: "CRKN",
      price: "0.113",
      change_amount: "-0.012",
      change_percentage: "-9.6%",
      volume: "390834576",
    },
    {
      ticker: "ASST",
      price: "0.9",
      change_amount: "0.4371",
      change_percentage: "94.4264%",
      volume: "265036829",
    },
    {
      ticker: "RGTI",
      price: "13.98",
      change_amount: "4.15",
      change_percentage: "42.2177%",
      volume: "224176282",
    },
    {
      ticker: "RIME",
      price: "0.0346",
      change_amount: "-0.007",
      change_percentage: "-16.8269%",
      volume: "220304444",
    },
    {
      ticker: "NVDA",
      price: "140.83",
      change_amount: "3.12",
      change_percentage: "2.2656%",
      volume: "188234891",
    },
    {
      ticker: "EONR",
      price: "1.315",
      change_amount: "0.295",
      change_percentage: "28.9216%",
      volume: "133117106",
    },
    {
      ticker: "QBTS",
      price: "6.33",
      change_amount: "1.06",
      change_percentage: "20.1139%",
      volume: "131186154",
    },
    {
      ticker: "HSDT",
      price: "1.03",
      change_amount: "0.279",
      change_percentage: "37.1505%",
      volume: "108405919",
    },
    {
      ticker: "USEG",
      price: "3.79",
      change_amount: "1.47",
      change_percentage: "63.3621%",
      volume: "105325688",
    },
    {
      ticker: "AAPL",
      price: "222.64",
      change_amount: "-7.34",
      change_percentage: "-3.1916%",
      volume: "96958795",
    },
    {
      ticker: "INTC",
      price: "21.77",
      change_amount: "0.28",
      change_percentage: "1.3029%",
      volume: "94651855",
    },
    {
      ticker: "ACON",
      price: "0.0425",
      change_amount: "0.0002",
      change_percentage: "0.4728%",
      volume: "92651611",
    },
    {
      ticker: "LCID",
      price: "2.86",
      change_amount: "-0.21",
      change_percentage: "-6.8404%",
      volume: "91871279",
    },
    {
      ticker: "SOUN",
      price: "16.52",
      change_amount: "2.88",
      change_percentage: "21.1144%",
      volume: "88431281",
    },
    {
      ticker: "TSLA",
      price: "424.07",
      change_amount: "-2.43",
      change_percentage: "-0.5698%",
      volume: "85541736",
    },
    {
      ticker: "TSLL",
      price: "29.53",
      change_amount: "-0.38",
      change_percentage: "-1.2705%",
      volume: "73436472",
    },
    {
      ticker: "PLUG",
      price: "2.2",
      change_amount: "-0.24",
      change_percentage: "-9.8361%",
      volume: "71272474",
    },
    {
      ticker: "SOFI",
      price: "17.9",
      change_amount: "1.4",
      change_percentage: "8.4848%",
      volume: "67274719",
    },
    {
      ticker: "MSTU",
      price: "12.66",
      change_amount: "-0.47",
      change_percentage: "-3.5796%",
      volume: "65867779",
    },
  ],
};

const monthlyData = {
  "Meta Data": {
    "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
    "2. Symbol": "AAPL",
    "3. Last Refreshed": "2025-01-22",
    "4. Time Zone": "US/Eastern",
  },
  "Monthly Time Series": {
    "2024-12-31": {
      "1. open": "237.2700",
      "2. high": "260.1000",
      "3. low": "237.1600",
      "4. close": "250.4200",
      "5. volume": "977942014",
    },
    "2024-11-29": {
      "1. open": "220.9650",
      "2. high": "237.8100",
      "3. low": "219.7100",
      "4. close": "237.3300",
      "5. volume": "891640714",
    },
    "2024-10-31": {
      "1. open": "229.5200",
      "2. high": "237.4900",
      "3. low": "221.3300",
      "4. close": "225.9100",
      "5. volume": "930835961",
    },
    "2024-09-30": {
      "1. open": "228.5500",
      "2. high": "233.0900",
      "3. low": "213.9200",
      "4. close": "233.0000",
      "5. volume": "1231814423",
    },
    "2024-08-30": {
      "1. open": "224.3700",
      "2. high": "232.9200",
      "3. low": "196.0000",
      "4. close": "229.0000",
      "5. volume": "1122666993",
    },
    "2024-07-31": {
      "1. open": "212.0900",
      "2. high": "237.2300",
      "3. low": "211.9200",
      "4. close": "222.0800",
      "5. volume": "1153193377",
    },
    "2024-06-28": {
      "1. open": "192.9000",
      "2. high": "220.2000",
      "3. low": "192.1500",
      "4. close": "210.6200",
      "5. volume": "1723984420",
    },
    "2024-05-31": {
      "1. open": "169.5800",
      "2. high": "193.0000",
      "3. low": "169.1100",
      "4. close": "192.2500",
      "5. volume": "1336570142",
    },
    "2024-04-30": {
      "1. open": "171.1900",
      "2. high": "178.3600",
      "3. low": "164.0750",
      "4. close": "170.3300",
      "5. volume": "1240410671",
    },
    "2024-03-28": {
      "1. open": "179.5500",
      "2. high": "180.5300",
      "3. low": "168.4900",
      "4. close": "171.4800",
      "5. volume": "1430780147",
    },
    "2024-02-29": {
      "1. open": "183.9850",
      "2. high": "191.0500",
      "3. low": "179.2500",
      "4. close": "180.7500",
      "5. volume": "1161711745",
    },
    "2024-01-31": {
      "1. open": "187.1500",
      "2. high": "196.3800",
      "3. low": "180.1700",
      "4. close": "184.4000",
      "5. volume": "1187139861",
    },
  },
};

let volumeData = [];

const eachMonthData = monthlyData["Monthly Time Series"];
console.log(eachMonthData);

for (const date in eachMonthData) {
  volumeData.push(eachMonthData[date]["5. volume"]);
}

const data = volumeData.reverse();

const ctx = document.querySelector(".chart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels
    datasets: [
      {
        label: "Monthly Data 2024",
        data: data,
        lineTension: 0.3,
        backgroundColor: "blue",
        borderColor: "aliceblue",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: "blue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const rightHeading = document.querySelector(".rightHeading");
const subHeaders = rightHeading.querySelectorAll("h5");

subHeaders.forEach((menu) => {
  menu.addEventListener("click", () => {
    console.log("clicked");
    rightHeading.querySelector(".active").classList.remove("active");
    menu.classList.add("active");
  });
});

const activeStocksBody = document.getElementById("activeStocks");
const topGainersBody = document.getElementById("topGainers");
const topLosersBody = document.getElementById("topLosers");

const activeStocks = topGainersLosersData["most_actively_traded"];
console.log(activeStocks);

activeStocks.forEach((stocks) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
              <td class="stockName">${stocks.ticker}</td>
              <td class="stockPrice">${stocks.price}</td>
              <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
              <td class="volume">${stocks.volume}</td>
              <td class="changePercentage" style="color:#FFB900;">${stocks.change_percentage}</td>
              `;
  // console.log(tr);
  activeStocksBody.appendChild(tr);
  activeStocksBody.style.display = "flex";
  topGainersBody.style.display = "none";
  topLosersBody.style.display = "none";
});

const body = document.querySelector(".tableBody");

// stocks.forEach((stock) => {
//   stock.addEventListener("click", () => {
//     const id = stock.getAttribute("data-id");
//     const data = stockData.find((obj) => obj.id == id);
//     const symbol = data.symbol;
//     console.log(symbol);
//     showGraph(symbol);
//   });
// });

async function showGraph(symbol) {
  console.log(symbol);

  const apikey = "CTHM6KRGP3QSVY85";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apikey}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((monthlyData) => {
      return monthlyData;
    });
  console.log(data);
  console.log(data["Monthly Time Series"]);

    if (data["Monthly Time Series"]){
      const filterData=[]
      const dailyData = data["Monthly Time Series"]

    for (const date in dailyData){
      if (date.startsWith("2024")){
        filterData[date]=dailyData[date]
      }
      console.log(filterData);
    }
  }
}

subHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    if (i == 0) {
      while (activeStocksBody.firstChild) {
        activeStocksBody.removeChild(activeStocksBody.firstChild);
      }
      const activeStocks = topGainersLosersDtata["most_actively_traded"];
      console.log(activeStocks);

      activeStocks.forEach((stocks) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td class="stockName">${stocks.ticker}</td>
                    <td class="stockPrice">${stocks.price}</td>
                    <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                    <td class="volume">${stocks.volume}</td>
                    <td class="changePercentage" style="color:#FFB900;">${stocks.change_percentage}</td>
                    `;
        // console.log(tr);
        activeStocksBody.appendChild(tr);
        activeStocksBody.style.display = "flex";
        topGainersBody.style.display = "none";
        topLosersBody.style.display = "none";
      });
    } else if (i == 1) {
      while (topGainersBody.firstChild) {
        topGainersBody.removeChild(topGainersBody.firstChild);
      }
      const topGainersStocks = topGainersLosersData["top_gainers"];
      // console.log(topGainersStocks);

      topGainersStocks.forEach((stocks) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td class="stockName">${stocks.ticker}</td>
                    <td class="stockPrice">${stocks.price}</td>
                    <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                    <td class="volume">${stocks.volume}</td>
                    <td class="changePercentage" style="color:rgb(25, 199, 13);">${stocks.change_percentage}</td>
                    `;
        // console.log(tr);
        topGainersBody.appendChild(tr);
        topGainersBody.style.display = "flex";
        topLosersBody.style.display = "none";
        activeStocksBody.style.display = "none";
      });
    } else if (i == 2) {
      while (topLosersBody.firstChild) {
        topLosersBody.removeChild(topLosersBody.firstChild);
      }
      const topLosersStocks = topGainersLosersData["top_losers"];
      // console.log(topLosersStocks);

      topLosersStocks.forEach((stocks) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td class="stockName">${stocks.ticker}</td>
                    <td class="stockPrice">${stocks.price}</td>
                    <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                    <td class="volume">${stocks.volume}</td>
                    <td class="changePercentage" style="color:red;">${stocks.change_percentage}</td>
                    `;
        // console.log(tr);
        topLosersBody.appendChild(tr);
        topLosersBody.style.display = "flex";
        topGainersBody.style.display = "none";
        activeStocksBody.style.display = "none";
      });
    } else {
      alert("something Went Wrong");
    }
  });
});

/* subHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    console.log(header, i);

    if (i == 0) {
      while (activeStocksBody.firstChild) {
        activeStocksBody.removeChild(activeStocksBody.firstChild);
      }
      mostActivelyStocks();
      const activeStocksEle = document.querySelectorAll("#activeStocks tr");
      console.log(activeStocksEle);

      activeStocksEle.forEach((ele) => {
        ele.addEventListener("click", () => {
          const clickedElement = ele;
          const ticker = clickedElement.querySelector(".stockName").textContent;
          showGraph(ticker);
        });
      });
    } 
    else if (i == 1) {
      while (topGainersBody.firstChild) {
        topGainersBody.removeChild(topGainersBody.firstChild);
      }
      topGainersStocks();

      const gainerStocksEle = document.querySelectorAll("#topGainers tr");
      console.log(gainerStocksEle);

      gainerStocksEle.forEach((ele) => {
        ele.addEventListener("click", () => {
          const clickedElement = ele;
          const ticker = clickedElement.querySelector(".stockName").textContent;
          showGraph(ticker);
        });
      });
    }
     else if (i == 2) {
      while (topLosersBody.firstChild) {
        topLosersBody.removeChild(topLosersBody.firstChild);
      }
      topLoserStocks();

      const loserStocksEle = document.querySelectorAll("#topLosers tr");
      console.log(loserStocksEle);

      loserStocksEle.forEach((ele) => {
        ele.addEventListener("click", () => {
          const clickedElement = ele;
          const ticker = clickedElement.querySelector(".stockName").textContent;
          showGraph(ticker);
        });
      });
    } else {
      alert("something Went Wrong");
    }
  });
}); */

console.log(activeStocksBody, topGainersBody, topLosersBody);

// mostactively stocks

/* async function mostActivelyStocks() {
  const apikey = "CTHM6KRGP3QSVY85";
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apikey}`;
  fetch(url);
  const activeStocks = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data["most_actively_traded"];
    });
  console.log(activeStocks);

  activeStocks.forEach((stocks) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td class="stockName">${stocks.ticker}</td>
                <td class="stockPrice">${stocks.price}</td>
                <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                <td class="volume">${stocks.volume}</td>
                <td class="dayLow" style="color:#FFB900">${stocks.change_percentage}</td>
                `;
    console.log(tr);
    topLosersBody.style.display = "none";
    topGainersBody.style.display = "none";
    activeStocksBody.style.display = "flex";
    activeStocksBody.appendChild(tr) 
  });
} */

// mostActivelyStocks()  

// top gainers stocks

/* async function topGainersStocks() {
  const apikey = "CTHM6KRGP3QSVY85";
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apikey}`;
  fetch(url);
  const topGainersStocks = await fetch(url)
    .then((res) => res.json())
    .then((data) => {return data["top_gainers"]});
  console.log(topGainersStocks);

  topGainersStocks.forEach((stocks) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td class="stockName">${stocks.ticker}</td>
                <td class="stockPrice">${stocks.price}</td>
                <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                <td class="volume">${stocks.volume}</td>
                <td class="dayLow" style="color: green;">${stocks.change_percentage}</td>
                `;
    console.log(tr);
    topGainersBody.appendChild(tr);
    topGainersBody.style.display = "flex";                  
    topLosersBody.style.display = "none";
    activeStocksBody.style.display = "none";
  });
} */

// losers stocks

/* async function topLoserStocks() {
  const apikey = "CTHM6KRGP3QSVY85";
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apikey}`;
  fetch(url);
  const loserStocks = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data["top_losers"];
    });
  console.log(loserStocks);

  loserStocks.forEach((stocks) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td class="stockName">${stocks.ticker}</td>
                <td class="stockPrice">${stocks.price}</td>
                <td class="changeAmount"  style="font-weight: 800">${stocks.change_amount}</td>
                <td class="volume">${stocks.volume}</td>
                <td class="dayLow" style="color: red;">${stocks.change_percentage}</td>
                `;
    console.log(tr);
    topLosersBody.style.display = "flex";
    topGainersBody.style.display = "none";
    activeStocksBody.style.display = "none";
    topLosersBody.appendChild(tr);

  });
} */
