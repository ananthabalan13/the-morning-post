const deatils = document.querySelectorAll(".details");

const newsWrapper = document.querySelector(".newsWrapper");
const mainContentWrapper = document.querySelector(".mainContentWrapper");

const mainHeading = document.querySelector(".textContent h2");
const mainDesc = document.querySelector(".textContent p");
const upadateDate = document.querySelector(".textContent span")
const loader =document.querySelector(".loader") 
const pageNotFoundDiv =document.querySelector(".pageNotFound")



const news ={
    "status": "ok",
    "totalResults": 8820,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "coindesk.com",
            "title": "Short-Term BTC Holders Quit, CME Open Interest Slid by Record During Monday's Price Drop",
            "description": "Short-Term BTC Holders Quit, CME Open Interest Slid by Record During Monday's Price Drop\nAs observed by many metrics, Monday's capitulation in bitcoin looks like a textbook local bottom.\nWhat to know:\n- Many metrics signaled a local bottom in the bitcoin pric…",
            "url": "https://biztoc.com/x/0f05d58152aac548",
            "urlToImage": "https://biztoc.com/cdn/0f05d58152aac548_s.webp",
            "publishedAt": "2025-01-28T11:20:12Z",
            "content": "Short-Term BTC Holders Quit, CME Open Interest Slid by Record During Monday's Price DropAs observed by many metrics, Monday's capitulation in bitcoin looks like a textbook local bottom.What to know:-… [+140 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "Jin",
            "title": "Почему XRP — не скам",
            "description": "В разгар продолжающихся дебатов о природе и законности криптовалюты XRP известный юрист и эксперт в области цифровых активов Билл Морган выступил с решительной защитой токена от нападок...Читать дальше",
            "url": "https://www.ixbt.com/live/crypto/pochemu-xrp----ne-skam.html",
            "urlToImage": "https://img.ixbt.site/live/topics/preview/00/09/63/58/7b5261c805.png",
            "publishedAt": "2025-01-28T11:18:05Z",
            "content": "XRP -. XRP . , , , .\r\n XRP $168 . , Bitcoin. XRP , .\r\n, XRP Ripple (SEC). , . ."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "2 Cryptocurrencies That Could Skyrocket This Year",
            "description": "In 2024, the crypto market saw the launch of new spot exchange-traded funds (ETFs), the rise of crypto as a political campaign issue, and a new all-time high for Bitcoin above the $100,000 mark. 2025 could be even better, especially given the new pro-crypto o…",
            "url": "https://biztoc.com/x/b623ac28411a6368",
            "urlToImage": "https://biztoc.com/cdn/b623ac28411a6368_s.webp",
            "publishedAt": "2025-01-28T11:09:35Z",
            "content": "In 2024, the crypto market saw the launch of new spot exchange-traded funds (ETFs), the rise of crypto as a political campaign issue, and a new all-time high for Bitcoin above the $100,000 mark. 2025… [+149 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "breakingthenews.net",
            "title": "Metaplanet plans $745M raise to boost BTC holdings to 21,000",
            "description": "Metaplanet Inc., a Japanese Bitcoin firm, announced Tuesday a strategy to solidify its position as a global leader in corporate Bitcoin holdings with a plan to raise ¥116.65 billion (approximately $74...",
            "url": "https://biztoc.com/x/805f4ce250623f38",
            "urlToImage": "https://biztoc.com/cdn/805f4ce250623f38_s.webp",
            "publishedAt": "2025-01-28T11:09:15Z",
            "content": "Metaplanet Inc., a Japanese Bitcoin firm, announced Tuesday a strategy to solidify its position as a global leader in corporate Bitcoin holdings with a plan to raise ¥116.65 billion (approximately $7… [+69 chars]"
        },
        {
            "source": {
                "id": "bild",
                "name": "Bild"
            },
            "author": "BILD",
            "title": "Düren - Polizei warnt vor Anlagebetrug",
            "description": "Mehrere Anzeigen in Düren: Betrüger nutzen steigende Bitcoin-Werte und versprechen hohe Gewinne. Polizei gibt wichtige Sicherheitstipps.",
            "url": "https://www.bild.de/regional/nordrhein-westfalen/dueren-polizei-warnt-vor-anlagebetrug-mit-kryptowaehrungen-6798b9d308bc756e749d01e0",
            "urlToImage": "https://images.bild.de/6798b9d308bc756e749d01e0/9c2a85d1384ce07b662d4c1885ce39f7-landscape,802410b5?w=1280",
            "publishedAt": "2025-01-28T11:07:26Z",
            "content": "Kreis Düren Die Kriminalpolizei Düren warnt vor einer neuen Welle von Anlagebetrugsfällen, die allein in den ersten drei Januarwochen 2025 sechs Anzeigen zur Folge hatten.\r\nDie Schadenssummen reichen… [+3222 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CryptoSlate"
            },
            "author": "Oluwapelumi Adejumo",
            "title": "Ripple CEO Brad Garlinghouse opposes Bitcoin only reserve for US",
            "description": "Ripple CEO Brad Garlinghouse has advocated for a US digital asset reserve incorporating multiple cryptocurrencies rather than focusing solely on Bitcoin. In a Jan. 28 post on X (formerly Twitter), Garlinghouse suggested that a future US digital asset reserve …",
            "url": "https://cryptoslate.com/ripple-ceo-brad-garlinghouse-opposes-bitcoin-centric-reserve-for-us/",
            "urlToImage": "https://cryptoslate.com/wp-content/uploads/2025/01/brad-garlinghouse-multi-asset.jpg",
            "publishedAt": "2025-01-28T11:03:24Z",
            "content": "Ripple CEO Brad Garlinghouse has advocated for a US digital asset reserve incorporating multiple cryptocurrencies rather than focusing solely on Bitcoin.\r\nIn a Jan. 28 post on X (formerly Twitter), G… [+3330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoinist"
            },
            "author": "Jake Simmons",
            "title": "Bitcoin: Arizona To Become First US State To Vote On Strategic Reserve Bill",
            "description": "Arizona has advanced Senate Bill 1025 — also known as the “Arizona Strategic Bitcoin Reserve (SBR) Act” — out of committee, positioning it to become the first US state to vote on legislation that would authorize investing state funds in Bitcoin. Dennis Porter…",
            "url": "https://bitcoinist.com/bitcoin-arizona-first-us-state-vote-reserve/",
            "urlToImage": "https://bitcoinist.com/wp-content/uploads/2025/01/DALL·E-2025-01-28-06.43.18-A-dynamic-wide-format-image-displaying-a-striking-Bitcoin-symbol-emboldened-and-emphasized-inside-the-geographic-outline-of-Arizona.-The-background-.webp",
            "publishedAt": "2025-01-28T11:00:46Z",
            "content": "Arizona has advanced Senate Bill 1025 also known as the Arizona Strategic Bitcoin Reserve (SBR) Act out of committee, positioning it to become the first US state to vote on legislation that would aut… [+2989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "newsBTC"
            },
            "author": "Christian Encila",
            "title": "New Ethereum Addresses Hit 200K: What’s Behind The Massive Spike?",
            "description": "Ethereum adoption is soaring, with the network just passing a critical milestone that has analysts forecasting a price recovery. Related Reading: Bitcoin Sudden Breakdown: Price Falls Below $100,000 Support On January 24th and 25th, Ethereum experienced a ris…",
            "url": "http://www.newsbtc.com/news/new-ethereum-addresses-hit-200k-whats-behind-the-massive-spike/",
            "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2025/01/a_62915f.png?fit=814%2C663",
            "publishedAt": "2025-01-28T11:00:44Z",
            "content": "Ethereum adoption is soaring, with the network just passing a critical milestone that has analysts forecasting a price recovery.\r\nOn January 24th and 25th, Ethereum experienced a rise in daily active… [+2998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ambcrypto.com"
            },
            "author": "Benjamin Njiri",
            "title": "Arthur Hayes’ Bitcoin prediction: ‘Drop to $75K before $250K by end-2025’",
            "description": "Here's why Arthur Hayes anticipates a 30% BTC price correction in the near term.",
            "url": "https://ambcrypto.com/arthur-hayes-bitcoin-prediction-drop-to-75k-before-250k-by-end-2025/",
            "urlToImage": "https://ambcrypto.com/wp-content/uploads/2025/01/BitcoinArthurHayes-1000x600.jpg",
            "publishedAt": "2025-01-28T11:00:17Z",
            "content": "<ul><li>Arthur Hayes projected a 30% BTC correction to $70K-$75K in the near term. </li><li>He linked the potential drop to rising U.S. Treasury yields and sticky inflation. </li></ul>Arthur Hayes, c… [+2220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Becca Bratcher, Contributor, \n Becca Bratcher, Contributor\n https://www.forbes.com/sites/beccabratcher/",
            "title": "\"The Worst Crypto Project?\" XRP Vs. Bitcoin Sparks Fierce Debate Over Centralization And Ideology",
            "description": "The clash between Bitcoin’s decentralized ethos and XRP’s centralized ambitions exposes a stark divide in crypto’s evolution.",
            "url": "https://www.forbes.com/sites/beccabratcher/2025/01/28/the-worst-crypto-project-xrp-vs-bitcoin-sparks-fierce-debate-over-centralization-and-ideology/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67983c57f26b7f153507c158/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-28T11:00:00Z",
            "content": "The clash between Bitcoins decentralized ethos and XRPs centralized ambitions exposes a stark divide in cryptos evolution. As lobbying efforts and political moves escalate, this rivalry shapes the fi… [+4602 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thephoblographer.com"
            },
            "author": "Feroz Khan",
            "title": "Refrakt – A Minimalistic Social Media Site That Can Be Better",
            "description": "Ever since Instagram became more video-centric, throwing long-term photographer accounts under the bus, more and more pro and hobbyist photographers have been looking for alternative social media platforms. Flickr experienced an upsurge recently after many ye…",
            "url": "https://www.thephoblographer.com/2025/01/28/refrakt-a-minimalistic-social-media-site-that-can-be-better/",
            "urlToImage": "https://www.thephoblographer.com/wp-content/uploads/2024/11/Screenshot-2024-11-17-at-16.53.14-scaled.jpg",
            "publishedAt": "2025-01-28T11:00:00Z",
            "content": "Ever since Instagram became more video-centric, throwing long-term photographer accounts under the bus, more and more pro and hobbyist photographers have been looking for alternative social media pla… [+7484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Activistpost.com"
            },
            "author": "Editor",
            "title": "Trump Signs Executive Order to Explore a U.S. Strategic Bitcoin Reserve",
            "description": "President Trump’s new executive order embraces Bitcoin and open blockchain technologies, bans Central Bank Digital Currencies, and revokes prior restrictive regulations—signaling a landmark policy shift toward fostering responsible innovation and financial fr…",
            "url": "https://www.activistpost.com/trump-signs-executive-order-to-explore-a-u-s-strategic-bitcoin-reserve/",
            "urlToImage": "https://www.activistpost.com/wp-content/uploads/2025/01/MjEyMzI3NjQ0NzI3ODc5Mjk2.webp",
            "publishedAt": "2025-01-28T11:00:00Z",
            "content": "President Trumps new executive order embraces Bitcoin and open blockchain technologies, bans Central Bank Digital Currencies, and revokes prior restrictive regulationssignaling a landmark policy shif… [+4456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Intercept"
            },
            "author": "Matt Sledge",
            "title": "Trump Appointees Can’t Own Crypto. That Rule Doesn’t Apply to Trump Himself.",
            "description": "For many government employees, merely owning cryptocurrency is off-limits. Not for Trump, who created a “very grifty” meme coin. \nThe post Trump Appointees Can’t Own Crypto. That Rule Doesn’t Apply to Trump Himself. appeared first on The Intercept.",
            "url": "https://theintercept.com/2025/01/28/trump-crypto-ethics-government/",
            "urlToImage": "https://theintercept.com/wp-content/uploads/2025/01/GettyImages-2195559375-e1738017991789.jpg?fit=3000%2C1500&w=1200&h=800",
            "publishedAt": "2025-01-28T11:00:00Z",
            "content": "When Tulsi Gabbard filed ethics paperwork to serve as Donald Trump’s director of national intelligence, she promised to sell her holdings of bitcoin, Cronos, Ethereum, and Solana cryptocurrencies. Fo… [+6186 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Lydia Moynihan",
            "title": "Crypto convict Heather ‘Razzlekhan’ Morgan would ‘rather be a proud felon than a backstabbing wife’",
            "description": "Heather Morgan revealed she originally wanted to be placed with another high-profile convict: \"I asked for Danbury prison, hoping I might get to know Caroline Ellison, as I thought it would be a fun plot twist.\"",
            "url": "https://nypost.com/2025/01/28/business/cyrpto-convict-heather-razzlekhan-morgan-dishes-on-rap-future/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/01/NYNEXT-THUMBNAILS-2000-x-1333-px-6-copy.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2025-01-28T11:00:00Z",
            "content": "Just days before beginning a prison sentence for her part in the most lucrative crypto heist ever, Heather Morgan  who, under the name Razzlekhan, went as viral for her rap videos as the outsized cri… [+7943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "James Van Straten",
            "title": "Tom Lee Calls Monday's Market Plunge a Great Buying Opportunity After AI, Crypto-Led Rout",
            "description": "On Monday, NVIDIA had the largest single-day market cap loss in history, erasing $465 billion in market cap.",
            "url": "https://www.coindesk.com/markets/2025/01/28/tom-lee-calls-monday-s-market-plunge-a-great-buying-opportunity-after-ai-crypto-led-rout",
            "urlToImage": "https://cdn.sanity.io/images/s3y3vcno/production/973ac9e063401b6ca2cf4c0159e13a50fb31399e-720x406.jpg?auto=format",
            "publishedAt": "2025-01-28T10:56:30Z",
            "content": "Tom Lee, head of Fundstrat Research, discussed Monday's market sell-off as an \"overreaction\". On CNBC, Lee said that the double-digit drawdown in NVIDIA (NVDA) is the biggest opportunity since the co… [+1397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BeInCrypto"
            },
            "author": "Luis Blanco",
            "title": "Predicción del precio de Bitcoin para febrero de 2025: analistas vs ChatGPT",
            "description": "El mes que está por finalizar ha estado marcado por picos de volatilidad en el precio de Bitcoin, con máximos históricos y caídas significativas: ¿Qué le espera a BTC en febrero de 2025? Esto es lo que proyectan los analistas y ChatGPT.\nEl post Predicción del…",
            "url": "https://es.beincrypto.com/prediccion-precio-bitcoin-febrero-2025/",
            "urlToImage": "https://es.beincrypto.com/wp-content/uploads/2025/01/image-233.png.webp",
            "publishedAt": "2025-01-28T10:53:00Z",
            "content": "El mes que está por finalizar ha estado marcado por picos de volatilidad en el precio de Bitcoin, con máximos históricos y caídas significativas: ¿Qué le espera a BTC en febrero de 2025? Esto es lo q… [+6410 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "James Van Straten, Omkar Godbole",
            "title": "Short-Term BTC Holders Quit, CME Open Interest Slid by Record During Monday's Price Drop",
            "description": "As observed by many metrics, Monday's capitulation in bitcoin looks like a textbook local bottom.",
            "url": "https://www.coindesk.com/markets/2025/01/28/short-term-btc-holders-quit-cme-open-interest-slid-by-record-during-monday-s-price-drop",
            "urlToImage": "https://cdn.sanity.io/images/s3y3vcno/production/cbb0a87b5ce0cb1e42730b354546d0d1d87e81e6-1800x1013.png?auto=format",
            "publishedAt": "2025-01-28T10:47:08Z",
            "content": "Short-term bitcoin (BTC) holders exited the market at a loss Monday as tumbling prices also saw derivative traders throw in the towel, leading to a significant decline in open futures bets on the Chi… [+1812 chars]"
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": "Ulrike Barth",
            "title": "Warum die Idee einer Bitcoin-Reserve die Krypto-Szene entzweit",
            "description": "Bisher hat sich US-Präsident Donald Trump nicht eindeutig geäußert,  wie er eine strategische Reserve mit Kryptowährungen aufbauen will. In der Branche gibt es nun einen offenen Streit zwischen XRP- und BTC-Fans.\nweiterlesen auf t3n.de",
            "url": "https://t3n.de/news/krypto-reserve-bitcoin-ripple-1670263/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2017/07/bitcoin-icos-shutterstock-176573198.jpg",
            "publishedAt": "2025-01-28T10:30:19Z",
            "content": "Der neue US-Präsident Donald Trump hat im Wahlkampf versprochen, die USA zur Kryptohauptstadt der Planeten zu machen. Dazu gehört auch die Idee, Bitcoin als Teil der nationalen Finanz- und Währungsre… [+4890 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "theblock.co",
            "title": "Mad Money host Jim Cramer says ‘you should own Bitcoin’ instead of MicroStrategy",
            "description": "Mad Money host Jim Cramer's has come back to recommending buying Bitcoin after saying he would \"not touch crypto in a million years.\"",
            "url": "https://biztoc.com/x/4c62fed5e45f38dd",
            "urlToImage": "https://biztoc.com/cdn/4c62fed5e45f38dd_s.webp",
            "publishedAt": "2025-01-28T10:24:45Z",
            "content": "Mad Money host Jim Cramer's has come back to recommending buying Bitcoin after saying he would \"not touch crypto in a million years.\"\r\nThis story appeared on theblock.co, 2025-01-28 10:23:41."
        },{
            "source": {
                "id": "info-money",
                "name": "InfoMoney"
            },
            "author": "Rodrigo Paz",
            "title": "Futuro de Bitcoin (BITF25): Confira os pontos de suporte e resistência para hoje (28)",
            "description": "Veja o que esperar para o futuro de Bitcoin neste início de semana\nThe post Futuro de Bitcoin (BITF25): Confira os pontos de suporte e resistência para hoje (28) appeared first on InfoMoney.",
            "url": "https://www.infomoney.com.br/mercados/futuro-bitcoin-bitf25-analise-tecnica-28012025/",
            "urlToImage": "https://www.infomoney.com.br/wp-content/uploads/2025/01/BITFUT-60-MINUTOS-28.01.2025.png?quality=70",
            "publishedAt": "2025-01-28T10:19:45Z",
            "content": "Os contratos futuros de Bitcoin (BITF25), com vencimento em janeiro, encerraram a última sessão com uma expressiva baixa de 3,77%, aos 599.880 pontos, marcando um dia de forte pressão vendedora. No c… [+2294 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Hodl"
            },
            "author": "Daily Hodl Staff",
            "title": "BlackRock Buys Another $1,000,000,000 Worth of Bitcoin in a Week To Control 2.7% of BTC Supply",
            "description": "New data from blockchain analytics firm Arkham reveals that asset management titan BlackRock piled up another $1 billion in Bitcoin (BTC) last week. Arkham says that BlackRock – which has over $10 trillion in assets under management – now controls 2.7% of all…",
            "url": "https://dailyhodl.com/2025/01/28/blackrock-buys-another-1000000000-worth-of-bitcoin-in-a-week-to-control-2-7-of-btc-supply/",
            "urlToImage": "https://dailyhodl.com/wp-content/uploads/2025/01/BlackRock-Buys-Another.jpg",
            "publishedAt": "2025-01-28T10:15:47Z",
            "content": "New data from blockchain analytics firm Arkham reveals that asset management titan BlackRock piled up another $1 billion in Bitcoin (BTC) last week.\r\nArkham says that BlackRock which has over $10 tri… [+1701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Jamie Crawley",
            "title": "Bitcoin Miner Hive Digital (HIVE) to Buy Paraguay Site From Bitfarms (BITF) for $85M",
            "description": "The acquisition of the site in Yguazú, Paraguay will increase the company's hashrate from 6 Eh/s to 25 EH/s by September of this year",
            "url": "https://www.coindesk.com/business/2025/01/28/bitcoin-miner-hive-digital-to-buy-paraguay-site-from-bitfarms-for-usd85m",
            "urlToImage": "https://cdn.sanity.io/images/s3y3vcno/production/58f28335b10816eedb7dfb4bd07a146a3f6b6cf9-4266x2400.jpg?auto=format",
            "publishedAt": "2025-01-28T10:14:21Z",
            "content": "Hive Digital Technologies (HIVE) agreed to buy a site in Paraguay from fellow bitcoin miner Bitfarms (BITF) for a total of $85 million including assumed obligations.\r\nThe acquisition of the site in Y… [+740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "coindesk.com",
            "title": "Bitcoin Miner Hive Digital to Buy Paraguay Site From Bitfarms for $85M",
            "description": "The acquisition of the site in Yguazú, Paraguay will increase the company's hashrate to 25 EH/s from 6 Eh/s by September.",
            "url": "https://biztoc.com/x/9228b81cafd53de6",
            "urlToImage": "https://biztoc.com/cdn/9228b81cafd53de6_s.webp",
            "publishedAt": "2025-01-28T10:13:54Z",
            "content": "The acquisition of the site in Yguazú, Paraguay will increase the company's hashrate to 25 EH/s from 6 Eh/s by September.\r\nThis story appeared on coindesk.com, 2025-01-28 10:10:24."
        }
    ]}

    loader.style.display="flex"
    
    const newsData=news["articles"]
    
    newsData.forEach((news,i)=>{
        const newsCard = `
        <div class="newsCard" data-index=${i} >
                        <div class="img">
                            <img  class="newsImageRelatedNews" src="${news.urlToImage}" alt="news">
                        </div>
                        <div class="details">
                            <h3>
                                ${news.title}
                            </h3>
                            <p>
                                ${news.description}
                            </p>
                        </div>
                        <span class="date">${formatDate(news.publishedAt)}</span>
                    </div>
      `;
      newsWrapper.innerHTML += newsCard;
      })    
      const newsCard = document.querySelectorAll(".newsCard")

newsCard.forEach((card,i) => {
  card.addEventListener("click", () => {
    pageNotFoundDiv.style.display="none"
    const index = card.getAttribute("data-index");

   const data = newsData[index]

  if(data){
      const imageDiv=`
      <div class="image">
                <img class="mainContentNewsImage" src="${data.urlToImage}" alt="News">
            </div>
            <div class="textContent">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <span class="upadatedDate"> Published at : ${formatDate(data.publishedAt)}     <a href="${data.url}">More information</a></span>
                <p class=authorName>Author: ${data.author}</p>
            </div>`
       mainContentWrapper.innerHTML = imageDiv
    }else{
       alert("something went wrong ")
   }
  });
});

  
function formatDate(date) {
  const now = new Date(date);

  const day = String(now.getDate()).padStart(2, "0");
  const month = now.toLocaleString("default", { month: "long" });
  const year = String(now.getFullYear()).slice(-2);

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}
setTimeout(() => {
        
        const newsCards=document.querySelectorAll(".newsCard")
        console.log(newsCards[0]);
        newsCards[0].click()
        console.log("clicked");
    
}, 1000);