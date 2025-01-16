const deatils = document.querySelectorAll(".details");

const newsWrapper = document.querySelector(".newsWrapper");
const mainContentWrapper = document.querySelector(".mainContentWrapper");

const mainHeading = document.querySelector(".textContent h2");
const mainDesc = document.querySelector(".textContent p");

const news = [
  {
    id: 1,
    heading: "Heading 1",
    desc: "description 1",
  },
  {
    id: 2,
    heading: "Heading 2",
    desc: "description 2",
  },
  {
    id: 3,
    heading: "Heading 3",
    desc: "description 3",
  },
  {
    id: 4,
    heading: "Heading 4",
    desc: "description 4",
  },
  {
    id: 5,
    heading: "Heading 5",
    desc: "description 5",
  },
  {
    id: 6,
    heading: "Heading 6",
    desc: "description 6",
  },
];

news.forEach((item, i) => {
  const newsCard = `
    <div class="newsCard" data-id=${item.id} >
                    <div class="img">

                    </div>
                    <div class="details">
                        <h3>
                            ${item.heading}
                        </h3>
                        <p>
                            ${item.desc}
                        </p>

                    </div>
                    <span class="date">${formatDate(new Date())}</span>
                </div>
  `;
  newsWrapper.innerHTML += newsCard;
});
const newsCard = document.querySelectorAll(".newsCard");

newsCard.forEach((card) => {
  card.addEventListener("click", () => {

    const id = card.getAttribute("data-id");
    const data = news.find((obj) => obj.id == id);

    if(data){
        mainHeading.textContent = data.heading;
        mainDesc.textContent = data.desc;    
    }else{
        alert("something went wrong ")
    }


    // news[i].desc = "in";

    // const newArr = news.map((item, index) => {
    //   return index == i ? { ...item, desc: "hi" } : item;
    // });

    // news = newArr ;

    console.log("news-->", news);

    // mainHeading.textContent=
  });
});
// console.log(newsCard);

function formatDate(date) {
  const now = new Date(date);

  const day = String(now.getDate()).padStart(2, "0"); // Day of the month
  const month = now.toLocaleString("default", { month: "long" }); // Full month name
  const year = String(now.getFullYear()).slice(-2); // Last two digits of the year

  const formattedDate = `${day} ${month} ${year}`; // Example: "16/January/25"
  return formattedDate;
}
