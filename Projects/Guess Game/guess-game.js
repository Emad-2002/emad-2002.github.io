//Page Loader
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

//Guess Game
function myGenerator(){
  const gNum = Math.ceil(Math.random() * 10);
  document.getElementById("user").readOnly=false;
  console.log(gNum);
  this.gNum = gNum;
  document.getElementById("game").style.display = "none";
  document.getElementById("message").style.display = "block";
}

function myValidator(){
  let uNum = document.getElementById("user").value;
  if (uNum>10){
    alert("The Value Entered is Greater than 10");
  }else if(uNum<1){
    alert("The Value Entered is Less than 1");
  }else if(uNum<=10&&uNum>=1){
    myGuess();
  }
}

function myGuess(){
  let uNum = document.getElementById("user").value;
  console.log(uNum); 
    
  if(gNum==uNum){
    let answer = document.getElementById("demo").innerHTML = "Correct Answer";
    console.log(answer);
    document.getElementById("user").readOnly=true;
    document.getElementById("retry-correct").style.display = "inline-block";
  }
  else{
    let answer = document.getElementById("demo").innerHTML = "Wrong Answer the Correct Answer is: " + gNum; 
    console.log(answer);
    document.getElementById("user").readOnly=true;
    document.getElementById("retry-wrong").style.display = "inline-block";
  }
    
  document.getElementById("demo").style.display = "block";
}


function gameRetry(){
  document.getElementById("user").value = "";
  document.getElementById("demo").style.display = "none";
  document.getElementById("retry-wrong").style.display = "none";
  document.getElementById("retry-correct").style.display = "none";
  myGenerator();
}
