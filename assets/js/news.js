const deatils = document.querySelectorAll(".details");

const newsWrapper = document.querySelector(".newsWrapper");
const mainContentWrapper = document.querySelector(".mainContentWrapper");

const mainHeading = document.querySelector(".textContent h2");
const mainDesc = document.querySelector(".textContent p");
const upadateDate = document.querySelector(".textContent span")

const news = [
  {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "KIM TONG-HYUNG, Associated Press",
            "title": "South Korea’s impeached president is arrested over martial law declaration and his supporters riot - The Hill",
            "description": "SEOUL, South Korea (AP) — Hours after South Korea’s impeached President Yoon Suk Yeol was formally arrested, triggering rioting by his supporters, his lawyers said Sunday that he remains defiant in his refusal to answer questions over the probe into his decla…",
            "url": "https://thehill.com/homenews/ap/ap-international/ap-south-koreas-impeached-president-is-arrested-over-martial-law-declaration-and-his-supporters-riot/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2025/01/678c964abd25f4.48770072.jpeg?w=1280",
            "publishedAt": "2025-01-19T05:58:00Z",
            "content": "SEOUL, South Korea (AP) Hours after South Koreas impeached President Yoon Suk Yeol was formally arrested, triggering rioting by his supporters, his lawyers said Sunday that he remains defiant in his … [+6261 chars]"
        },
        {
            "source": {
                "id": 1,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Israel says Gaza ceasefire delayed until Hamas provides list of hostages - BBC.com",
            "description": "The first phase of the ceasefire deal between Israel and Hamas was expected to start at 08:30 local time (06:30 GMT).",
            "url": "https://www.bbc.com/news/live/ckg0znng8x2t",
            "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
            "publishedAt": "2025-01-19T05:55:25Z",
            "content": "Joel GunterReporting from Jerusalem\r\nWith less than half an hour to go before the ceasefire is due to begin, Israel is still waiting for the names of the three hostages expected to be released today,… [+808 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "LARRY LAGE",
            "title": "Jayden Daniels and the Commanders stun the top-seeded Lions 45-31 to reach NFC title game - The Associated Press",
            "description": "Jayden Daniels threw for two touchdowns in a flawless performance by Washington’s dazzling rookie, and the Commanders stunned the Detroit Lions 45-31 to reach the NFC championship game for the first time since winning the Super Bowl 33 years ago. The sixth-se…",
            "url": "https://apnews.com/article/lions-commanders-score-nfl-playoffs-74382ca3f1bc0c69caba21e39f4787d3",
            "urlToImage": "https://dims.apnews.com/dims4/default/5bca915/2147483647/strip/true/crop/7743x4355+0+403/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F36%2F60%2F7adca78b13db6b4555c47c6cd7a6%2Fb41e9f6675334d9e8af6cff9cbb6d221",
            "publishedAt": "2025-01-19T05:00:00Z",
            "content": "DETROIT (AP) Jayden Daniels and the nothing-to-lose Washington Commanders sent the top-seeded Detroit Lions to a stunningly swift playoff exit.\r\nDaniels threw for two touchdowns and fellow rookie Mik… [+4719 chars]"
        },
        {
            "source": {
                "id": 2,
                "name": "Deadline"
            },
            "author": "Natalie Oganesyan",
            "title": "Adam Scott Reflects On Viral ‘Severance’ Pop-Up: “Didn’t Leave A Glass Cube For 3 Hours” - Deadline",
            "description": "Adam Scott reflected on the viral 'Severance' marketing stunt held in New York City, joking that no one 'peed for 3 hours' while in the glass cubicle.",
            "url": "http://deadline.com/2025/01/adam-scott-severance-marketing-pop-up-new-york-1236260709/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2025/01/adam-scott.jpg?w=1024",
            "publishedAt": "2025-01-19T03:55:00Z",
            "content": "Though the Lumon Industries pop-up in New York City’s Grand Central Terminal may have inadvertently recreated the less-than-ethical work conditions of the shadowy conglomerate at the center of Apple … [+2536 chars]"
        },
        {
            "source": {
                "id": 3,
                "name": "The Official Website of the Ultimate Fighting Championship"
            },
            "author": null,
            "title": "Main Card Results | UFC 311: Makhachev vs Moicano - UFC",
            "description": "See The Fight Results, Watch Post-Fight Interviews With The Main Card Winners And More From UFC 311: Makhachev vs Moicano, Live From Intuit Dome In Los Angeles, California",
            "url": "https://www.ufc.com/news/main-card-results-highlights-winner-interviews-ufc-311-makhachev-vs-moicano-los-angeles",
            "urlToImage": "https://ufc.com/images/styles/card/s3/image/2025-01/011825-ufc-311-makhachev-vs-moicano-EVENT-ART_0.jpg?itok=fPNIO4_X",
            "publishedAt": "2025-01-19T03:45:00Z",
            "content": "Nurmagomedov was sharp to start, using his diverse striking arsenal and outstanding grappling to pick at the champion, largely keep things standing, and get out to an early lead. But as the rounds pa… [+767 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Hannah Knowles",
            "title": "TikTok probably will get a 90-day reprieve on ban, Trump says - The Washington Post",
            "description": "The president-elect told NBC News that extending the deadline before TikTok is banned in the United States would be “appropriate.”",
            "url": "https://www.washingtonpost.com/technology/2025/01/18/trump-tiktok-ban-90-day-reprieve/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KGYFE2L6Q3D7JESFLWLRTQOHYQ_size-normalized.JPG&w=1440",
            "publishedAt": "2025-01-19T03:21:14Z",
            "content": "President-elect Donald Trump publicly said Saturday that he will probably give TikTok a 90-day reprieve from a U.S. ban set to take effect Sunday, just before he takes office.\r\nI think that would be,… [+2740 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Alice Miranda Ollstein",
            "title": "Get ready for Trump’s executive order onslaught - POLITICO",
            "description": "The incoming president is trying to deliver on a long list of Day One promises.",
            "url": "https://www.politico.com/news/2025/01/18/trumps-executive-order-onslaught-00199147",
            "urlToImage": "https://static.politico.com/d9/05/98c4fe154b078c5f644707297144/https-delivery-gettyimages.com/downloads/2189744490",
            "publishedAt": "2025-01-19T02:00:00Z",
            "content": "He can talk all he wants about executive orders. But at the end of the day, the action of trying to execute is going to be centered in the agencies, and the transitions ability to get their complete … [+14806 chars]"
        },
        {
            "source": {
                "id": 4,
                "name": "Deadline"
            },
            "author": "Dominic Patten",
            "title": "Justin Baldoni’s Lawyer Decries “Revoltingly False Sexual Allegations” From Blake Lively As Lawsuits Fly; Brands At Business Heart Of Dispute - Deadline",
            "description": "In this Deadline exclusive, it is clear the ever growing legal war between the It Ends With Us stars is getting more & more personal as more lawsuits",
            "url": "http://deadline.com/2025/01/blake-lively-justin-baldoni-lawyer-latest-1236260673/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2025/01/L-R-Blake-Lively-Ryan-Reynolds-and-Justin-Baldoni.jpg?w=1024",
            "publishedAt": "2025-01-19T01:44:00Z",
            "content": "EXCLUSIVE: With yet another week of more lawsuits in the ever increasing obloquy fray between It Ends With Us stars Blake Lively and Justin Baldoni, the court of public opinion has proved as much of … [+8732 chars]"
        },
        {
            "source": {
                "id": 5,
                "name": "247Sports"
            },
            "author": null,
            "title": "How Ohio State, Notre Dame rallied from stunning losses, sparked national championship runs - 247Sports",
            "description": null,
            "url": "https://247sports.com/longformarticle/how-ohio-state-notre-dame-rallied-from-stunning-losses-sparked-national-championship-runs-244376139/",
            "urlToImage": null,
            "publishedAt": "2025-01-19T01:24:57Z",
            "content": "Want to access this website or page?\r\nAsk for permission"
        },
        {
            "source": {
                "id": 6,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Chiefs deliver crushing bad beat to sport bettors by taking intentional safety in final seconds vs. Texans - CBS Sports",
            "description": "Kansas City closed as a 9.5-point favorite against Houston and led by 11 points late in the game",
            "url": "https://www.cbssports.com/nfl/news/chiefs-deliver-crushing-bad-beat-to-sport-bettors-by-taking-intentional-safety-in-final-seconds-vs-texans/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/01/19/3d75e448-8313-4379-b406-5450e9109465/thumbnail/1200x675/cf65a7f356861275ba0292a51e51462f/patrick-mahomes.jpg",
            "publishedAt": "2025-01-19T01:06:00Z",
            "content": "Late in their divisional round win over the Houston Texans, the Kansas City Chiefs held an 11-point lead. After blocking a Ka'imi Fairbairn field goal attempt, Kansas City got the ball back with 1:46… [+1520 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Dalia Faheid",
            "title": "All poultry activities suspended in Georgia after bird flu confirmed in a commercial operation - CNN",
            "description": "Georgia has suspended all poultry activities after bird flu was confirmed in a commercial poultry operation, officials said Friday.",
            "url": "https://www.cnn.com/2025/01/18/us/bird-flu-georgia-suspends-poultry-activities-commercial-flock/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2025-01-18-at-6-59-44-pm.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2025-01-19T01:02:00Z",
            "content": "All poultry activities have been suspended in Georgia after bird flu was confirmed in a commercial poultry operation, officials said Friday.\r\nThe positive bird flu case in Elbert County was confirmed… [+3274 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Emma Lord",
            "title": "These 44 Reliable Products Have Some Real “I’m In My Thirties And Too Tired For Nonsense” Energy - BuzzFeed",
            "description": "You have spent too many years trying too many subpar products — you deserve this holy grail dry shampoo and game-changing \"no scrub\" shower cleaner as a reward.",
            "url": "https://www.buzzfeed.com/emmalord9/reliable-thirties-products",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2025-01/9/16/enhanced/5f7af13e5dc7/original-3329-1736441328-2.jpg?crop=3001:1575;0,0%26downsize=1250:*",
            "publishedAt": "2025-01-19T01:01:06Z",
            "content": "Check out a TikTok of the foot masks in action. \r\nI'm a long-ish distance runner, and these were certainly an interesting experience for my feet! You slide them on and, after a few minutes, feel a ti… [+653 chars]"
        },
        {
            "source": {
                "id": 7,
                "name": "FOX 31 Denver"
            },
            "author": "Spencer Kristensen, Brooke Williams",
            "title": "What is the coldest temperature Colorado has ever reached? - FOX 31 Denver",
            "description": "Temperatures in Colorado are expected to plunge well under zero degrees this weekend. How do they stack up against the coldest days in Colorado history?",
            "url": "https://kdvr.com/weather/what-is-the-coldest-temperature-colorado-has-ever-reached/",
            "urlToImage": "https://kdvr.com/wp-content/uploads/sites/11/2025/01/GettyImages-637409946.jpg?w=1280",
            "publishedAt": "2025-01-18T23:48:51Z",
            "content": "DENVER (KDVR) An arctic blast over the weekend is leaving Colorado a little worse for wear. Subzero temperatures are set to hit just about everywhere in the state with only a couple of cities remaini… [+2427 chars]"
        },
        {
            "source": {
                "id": 8,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Spain: Ski lift incident injures dozens, two seriously - DW (English)",
            "description": "A ski lift malfunction in the Spanish Pyrenees has injured several vacationers, some very seriously. Dozens more skiers were rescued by emergency services crews as they dangled high above the slopes.",
            "url": "https://www.dw.com/en/spain-ski-lift-incident-injures-dozens-two-seriously/a-71338661",
            "urlToImage": "https://static.dw.com/image/71338189_6.jpg",
            "publishedAt": "2025-01-18T23:33:51Z",
            "content": "A ski lift accident in the Spanish Pyrenees injured at least 30 people on Saturday and left dozens more trapped for hours some 15 meters (50 feet) above slopes in the resort town of Astun in the coun… [+1347 chars]"
        },
        {
            "source": {
                "id": 9,
                "name": "BBC News"
            },
            "author": null,
            "title": "Trump launches meme coin, $TRump days before return to White House - BBC.com",
            "description": "Hours after its launch, the market capitalisation for $Trump reached nearly $5.5bn (£4.5bn).",
            "url": "https://www.bbc.com/news/articles/c9vmym2jvy9o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/66a7/live/609d6b00-d5de-11ef-aa9e-e3c2d27d9827.jpg",
            "publishedAt": "2025-01-18T23:17:08Z",
            "content": "US President-elect Donald Trump has launched his own cryptocurrency, which quickly soared in market capitalisation to several billion dollars.\r\nHis release of the meme coin, $Trump, comes as he prepa… [+2297 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News",
            "title": "Over 95 million Americans on alert for brutal cold temperatures in coming days - ABC News",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "url":"https://abcnews.go.com/US/85-million-americans-cold-weather-alerts/story?id\\\=117825788",
            "urlToImage": null,
            "publishedAt": "2025-01-18T22:52:30Z",
            "content": null
        },
        {
            "source": {
                "id": 10,
                "name": "SpaceNews"
            },
            "author": "Jeff Foust",
            "title": "FAA requires mishap investigation for failed New Glenn landing - SpaceNews",
            "description": "While Blue Origin considers the first flight of its New Glenn rocket a success, it will have to complete a mishap investigation before its next launch.",
            "url": "http://spacenews.com/faa-requires-mishap-investigation-for-failed-new-glenn-landing/",
            "urlToImage": "https://jetpack.com/redirect/?source=sigenerate&query=t%3DeyJpbWciOiJodHRwczpcL1wvc3BhY2VuZXdzLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNVwvMDFcL05HMS1MaWZ0b2ZmLUhvcml6b250YWwtMTAyNHg2ODMuanBnIiwidHh0IjoiRkFBIHJlcXVpcmVzIG1pc2hhcCBpbnZlc3RpZ2F0aW9uIGZvciBmYWlsZWQgTmV3IEdsZW5uIGxhbmRpbmciLCJ0ZW1wbGF0ZSI6ImRvaXMiLCJibG9nX2lkIjo4MDY4MTk3OX0.XAGrhsLAtJRX_lW9JaSGN26kSyxTl8Ys4R0PMhOfTogMQ",
            "publishedAt": "2025-01-18T22:47:21Z",
            "content": "WASHINGTON While Blue Origin considers the first flight of its New Glenn rocket a success, the company will have to complete a mishap investigation before its next launch.\r\nNew Glenn lifted off on it… [+3824 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Emily Ngo, Joe Anuta",
            "title": "Eric Adams returns from Trump meeting to voters wary of the president-elect - POLITICO",
            "description": "The New York City mayor, who is under indictment, addressed his sit down at a Martin Luther King Jr. Day event in Harlem.",
            "url": "https://www.politico.com/news/2025/01/18/eric-adams-trump-new-york-00199162",
            "urlToImage": "https://static.politico.com/a7/ec/da93dbd04d67bc1eaa7037af52d8/54273464539-ab5e183807-o.jpg",
            "publishedAt": "2025-01-18T22:46:05Z",
            "content": "If people want to speculate, thats their right to speculate, he added.\r\nThe mayor barely mentioned Trump during his remarks at the annual Martin Luther King Jr. Day forum hosted by Al Sharpton in Har… [+4900 chars]"
        },
        {
            "source": {
                "id": 11,
                "name": "Deadline"
            },
            "author": "Natalie Oganesyan",
            "title": "David Lynch’s Children Pay Tribute To Filmmaker, Invite People To Honor Him In “Worldwide Group Meditation” - Deadline",
            "description": "Following the death of David Lynch, his four children paid tribute to their father and invited people everywhere to join in a 'group meditation.'",
            "url": "http://deadline.com/2025/01/david-lynch-children-tribute-worldwide-meditation-1236260660/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2025/01/David-Lynch-1.jpg?w=1024",
            "publishedAt": "2025-01-18T22:44:00Z",
            "content": "Following the death of David Lynch, his four children — Jennifer, Austin, Riley and Lula Lynch — paid tribute to their filmmaker father and invited people everywhere to join in a “worldwide group med… [+2610 chars]"
        },
        {
            "source": {
                "id": 10,
                "name": "Associated Press"
            },
            "author": "THE ASSOCIATED PRESS",
            "title": "Live updates: Trump heads to Washington for inaugural celebrations - The Associated Press",
            "description": "Republican president-elect Donald Trump is returning to Washington Saturday to kick off days of pageantry heralding his second inauguration.",
            "url": "https://apnews.com/live/peoples-march-trump-updates",
            "urlToImage": "https://dims.apnews.com/dims4/default/1d343bd/2147483647/strip/true/crop/4215x2371+0+220/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Faf%2Fc1%2Fd7d81ae8764eac368c14337059ee%2Fcbb03f448af74653acad44cc43f687cc",
            "publishedAt": "2025-01-18T22:28:00Z",
            "content": "Thousands of signs with different messages dotted K Street NW as protesters staged at three different areas within a five-block radius. \r\nLillian Fenske, 31, drove six hours from Greensboro, North Ca… [+885 chars]"
        }
    ]
}
];


const newsData =news[0].articles
console.log(newsData);

newsData.forEach((news,i)=>{
  const newsCard = `
  <div class="newsCard" data-id=${news.source["id"]} >
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
const newsCard = document.querySelectorAll(".newsCard");

newsCard.forEach((card) => {
  card.addEventListener("click", () => {

    const id = card.getAttribute("data-id");
    
    const data = newsData.find((obj) => obj.source.id == id);
    console.log(data);
    

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
