// for page loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

// for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// for closing hamburger menu
document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


//dark mode
function myDark(){
  document.body.classList.toggle("dark-mode")
}

// keep dark mode on all pages
if (localStorage.getItem('darkMode') === null){
  localStorage.setItem('darkMode', "false");
}

checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode') === "true"){
        document.body.classList.toggle("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-sun");
    }
    
    else if(localStorage.getItem('darkMode') === "false"){
        document.body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
    }
}

function changeStatus(){
    if (localStorage.getItem('darkMode') === "true"){
        localStorage.setItem('darkMode', "false");                  
        document.body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
    } 
    
    else if(localStorage.getItem('darkMode') === "false"){
        localStorage.setItem('darkMode', "true");                   
        document.body.classList.toggle("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-sun");

    }
}

