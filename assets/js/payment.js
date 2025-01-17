document.getElementById('pay-now').onclick = function(e) {
    e.preventDefault();
    
    var options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: document.getElementById('amount').value * 100,
      currency: "INR",
      name: document.getElementById('name').value,
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('phone').value,
      },
      theme: {
        color: "#3399cc",
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }


const paymentDetailsBox = document.querySelectorAll(".box")
console.log(paymentDetailsBox);

const details = document.querySelectorAll(".details")
console.log(details);

const mainDetails = document.querySelector(".detail")
console.log(mainDetails);

const paymentDetailsContainer =document.querySelector(".paymentDetails")
console.log(paymentDetailsContainer);



paymentDetailsBox.forEach((box,i)=>{
  box.addEventListener('click',()=>{
    paymentDetailsContainer.querySelector(".active").classList.remove("active")
    box.classList.add("active")
    mainDetails.querySelector(".active").classList.remove("active")
    details[i].classList.add("active")  
  })
})






