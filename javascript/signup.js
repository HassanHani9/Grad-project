//all inputs inside the form
const allinput = document.querySelectorAll(".con .row .right input");
const password = document.getElementById("Password");
const conPassword = document.getElementById("con-Password");
const demoText = document.querySelector(".con .row .right .demotext");
const mainForm = document.getElementById("sign-up-form");
const overLayOne = document.querySelector('.overlayone')
const overLayTwo = document.querySelector('.overlaytwo')
let match = true;
//function that match password with confirm password
function passwordMatch() {
    if(password === conPassword){
      match = true
      demoText.style.display = "none"
    }else{
      match = false;
        demoText.innerHTML = "Password Doesn't Match"
        demoText.style.display = 'block'
        demoText.style.color = 'red'
      
    }
}

mainForm.addEventListener("submit", function (e) {
  // passwordMatch()
  
  e.window.location.href = '../html/verify.html';
});


