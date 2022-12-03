// for page loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

// to display time 
function Timer(){
  let d = new Date();
  let h = document.getElementById("hours");
  let m = document.getElementById("minutes");
  let s = document.getElementById("seconds");
  let AmORPm = document.getElementById("moment");
  let moment = d.getHours() >=12 ? "PM":"AM"; 

  h.innerHTML = d.getHours();
  m.innerHTML = d.getMinutes();
  s.innerHTML = d.getSeconds();
  AmORPm.innerHTML = moment; 

}

setInterval(Timer,1);
