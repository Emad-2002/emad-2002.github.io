// for viewing date
let d = new Date();
let date = d.getDate();
let month = d.getMonth()+1;
let year = d.getFullYear();

document.getElementById("date").innerText = "Current Date: " + date + " / " + month + " / " + year;

// for page loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})

