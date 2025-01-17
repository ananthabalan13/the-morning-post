const subscribeBtn = document.querySelectorAll(".subscribe-btn")
console.log(subscribeBtn);

subscribeBtn.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        window.location.href='payment.html'
    })
})
const rightNav = document.querySelector(".rightNav")
console.log(rightNav);

const menuItems = document.querySelectorAll("a")
console.log(menuItems);

menuItems.forEach((menu,i)=>{
    menu.addEventListener("click",()=>{
        rightNav.querySelector(".active").classList.remove("active")
        menuItems[i].classList.add("active")
    })
})
