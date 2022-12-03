// Pre Loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

//Calculator
let string = "";
let display = document.getElementById("screen");
let buttons = document.querySelectorAll(".buttons");

Array.from(buttons).forEach(function myFunction(buttons){
  buttons.addEventListener("click", function myListener(x){
    
    if(x.target.innerHTML == "="){
      string = eval(string);
      display.innerHTML = string;
      console.log("Answer is = ",string);
    }
    else if(x.target.innerHTML == "AC"){
      string = "";
      display.innerHTML = string;
    }
    else if(x.target.innerHTML == "+/-"){
      string = string * -1;
      display.innerHTML = string;
    }
    else{
      console.log("Value Selected = ",x.target);
      string += x.target.innerHTML;
      display.innerHTML = string;
    }
    
  })
})

//dark mode
function myDark(){
  document.body.classList.toggle("dark-mode");
}

//dark-mode sync
if (localStorage.getItem("darkMode") === null){
  localStorage.setItem("darkMode","false");
}

checkStatus();

function checkStatus(){
  if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.toggle("dark-mode");
    document.getElementById("dark-mode-icon").classList.toggle("fa-sun");
  }

  else if(localStorage.getItem("darkMode") === "false"){
    document.body.classList.remove("dark-mode");
    document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
  }
}

function changeStatus(){
  if(localStorage.getItem("darkMode") === "true"){
    localStorage.setItem("darkMode" , "false");
    document.body.classList.remove("dark-mode");
    document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
  }

  else if(localStorage.getItem("darkMode") === "false"){
    localStorage.setItem("darkMode" , "true");
    document.body.classList.toggle("dark-mode");
    document.getElementById("dark-mode-icon").classList.toggle("fa-sun");
  }
}
