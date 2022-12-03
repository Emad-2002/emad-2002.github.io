// interaction observer
const observer = new IntersectionObserver((sections) => {
  sections.forEach((section) => {
    if(section.isIntersecting == true){
      section.target.classList.add("show");
    }
  });
});

const observer2 = new IntersectionObserver((sections) => {
  sections.forEach((section) => {
    if(section.isIntersecting == true){
      section.target.classList.add("show2");
    }
  });
});

const observer3 = new IntersectionObserver((sections) => {
  sections.forEach((section) => {
    if(section.isIntersecting == true){
      section.target.classList.add("show3");
    }
  });
});

const targetElements = document.querySelectorAll(".targets");
const targetElements2 = document.querySelectorAll(".targets2");
const targetElements3 = document.querySelectorAll(".targets3");


targetElements.forEach((el) => observer.observe(el));
targetElements2.forEach((el) => observer2.observe(el));
targetElements3.forEach((el) => observer3.observe(el));

// for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const content = document.querySelector(".content");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  content.classList.toggle("active");
})

// for closing hamburger menu

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  content.classList.remove("active");
}))

// for page loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

//dark mode
function myDark(){
  document.body.classList.toggle("dark-mode")
}

// keep dark mode sync on all pages
if (localStorage.getItem('darkMode')===null){
  localStorage.setItem('darkMode', "false");
}

checkStatus();

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        document.body.classList.toggle("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-sun");
    }
    
    else if(localStorage.getItem('darkMode')==="false"){
        document.body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
    }
}

function changeStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        localStorage.setItem('darkMode', "false");                  
        document.body.classList.remove("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
    } 
    
    else if(localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");                   
        document.body.classList.toggle("dark-mode");
        document.getElementById("dark-mode-icon").classList.toggle("fa-sun");

    }
}
