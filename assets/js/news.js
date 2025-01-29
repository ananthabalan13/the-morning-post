const deatils = document.querySelectorAll(".details");

const newsWrapper = document.querySelector(".newsWrapper");
const mainContentWrapper = document.querySelector(".mainContentWrapper");

const mainHeading = document.querySelector(".textContent h2");
const mainDesc = document.querySelector(".textContent p");
const upadateDate = document.querySelector(".textContent span")
const loader =document.querySelector(".loader") 


async function showNewsCard(){
    loader.style.display = "block"
    const apikey="65547b5e1fee4d7c8d6e7733f183eb3f"
    const url =`https://newsapi.org/v2/everything?q=bitcoin&from=2024-12-29&sortBy=publishedAt&apiKey=${apikey}`
    const news=await fetch(url)
    .then(res => res.json())
    .then(news => {return news})
    
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
      loader.style.display="none"   
      })    
      const newsCard = document.querySelectorAll(".newsCard")

newsCard.forEach((card,i) => {
  card.addEventListener("click", () => {
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
}
showNewsCard()

  
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
    
    newsCards[0].click()
}, 1000);