// Page Loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

// Temp Converter
let f;    
let c;
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
let choice1 = document.getElementById("choice-1");
let choice2 = document.getElementById("choice-2");

function myFtoC(){
  f = document.getElementById("fah").value;
  FtoC = (f - 32)*(0.5556);
  FtoC = FtoC.toString().slice(0,6);
  result1.innerHTML = "Result for "+f+"&#8457 "+"to &#8451 = "+FtoC+"&#8451";
  console.log(f);
  console.log(FtoC);
  document.querySelector(".reset1").style.display = "inline-block";

  if(f <= 93.2){
    document.querySelector(".Fahrenheit").style.background = "blue";
  }else if(f >=46 && f<= 59){
    document.querySelector(".Fahrenheit").style.background = "green";
  }

  
}


function myCtoF(){
  c = document.getElementById("cel").value;
  CtoF = (c*1.8)+32;
  result2.innerHTML = "Result for "+c+"&#8451 "+"to &#8457 = "+CtoF+"&#8457";
  console.log(c);
  console.log(CtoF);
  document.querySelector(".reset2").style.display = "inline-block";
}

choice1.addEventListener("change",function(){
  if(choice1.checked == true){
    document.querySelector(".Fahrenheit").style.display = "flex"; 
  }else if(choice1.checked == false){
    document.querySelector(".Fahrenheit").style.display = "none"; 
  }
})

choice2.addEventListener("change",function(){
  if(choice2.checked == true){
    document.querySelector(".Celsius").style.display = "flex"; 
  }else if(choice2.checked == false){
    document.querySelector(".Celsius").style.display = "none"; 
  }
})

function myReset1(){
  document.getElementById("fah").value = "";
  result1.innerHTML = "";
  document.querySelector(".reset1").style.display = "none";
  document.querySelector(".Fahrenheit").style.background = "none";
}

function myReset2(){
  document.getElementById("cel").value = "";
  result2.innerHTML = "";
  document.querySelector(".reset2").style.display = "none";
}