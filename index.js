//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////

// Form Validation RegEx


let name = document.getElementById("name")
let surname = document.getElementById("surname")
let email = document.getElementById("email")
let cardnumber = document.getElementById("cardnum");
let cvc = document.getElementById("cvc")






//const re1 = 
//const re2 = 
//const re3 =
// const re4 = /\d{16}/;

// function testCardnumber(cardnumberInput) {
//   const ok = re.exec(cardnumberInput.value);

//   output.textContent = 
// }
