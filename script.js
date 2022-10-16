const num1 = document.getElementById("random-nmbr");
const num2 = document.getElementById("match-nmbr");
const rightImg = document.getElementById("right-img");
const wrongImg = document.getElementById("wrong-img");

//RANDOM NUMBER
function randomNmbr(){
  let randomNmber = Math.round(Math.random() * 100000);
  let addString = randomNmber + "";
  if (addString.length == 5) {
    num1.innerText = addString;
  }
  else{
    addString = 87342;
  }
  return addString;
}

//MODE CHANGE HANDLER
document.getElementById("mode").addEventListener('click', changeMode());
function changeMode(){
  let modeBtn = document.getElementById("mode").innerText;

  if (modeBtn == 'CUSTOM') {
    document.getElementById("mode").innerText = 'EASY';
    document.getElementById("mode").style.background = 'lime';
    document.getElementById("custom-btn").style.display = "none";
    num1.innerText = "PLAY"
  }
  if (modeBtn == 'EASY') {
    document.getElementById("mode").innerText = 'CUSTOM';
    document.getElementById("mode").style.background = 'skyblue';
    num1.innerText = "SET TIME";
  }
  if (modeBtn == "EASY") {
    num1.addEventListener("click", function(){
      randomNmbr();
      const myTimeout = setTimeout(vanished, customSec());
    })
    document.getElementById("custom-btn").style.display = "block";
  }
  if (modeBtn == "CUSTOM") {
    num1.addEventListener("click", function(){
      randomNmbr();
    })
  }
  return changeMode;
}

//CUSTOM TIME SET FUNTION
function customSec(){
  let getSec = document.getElementById("custom-sec").value;;
  return getSec;
}

//BUTTON CLICK HANDLER
Array.from(
    document.getElementsByTagName("button")
)
.forEach(
    (button) => {
        button.addEventListener("click", handler)
    }
)
function handler(event){
    let key = event.target.innerText;

    switch (key) {
        case "C":
            num2.innerText = num2.innerText.slice(0, -1);
            break;

        case "OK":
                if (num1.innerText == num2.innerText) {
                    rightImg.style.display = "block";
                    num2.style.display = "none";
                    const audio = new Audio('yes.mp3');
                    audio.play();
                    let point = document.getElementById("point").innerText
                    point = parseInt(point)
                    point = point + 10;
                    document.getElementById("point").innerText = point;
                }
                else {
                    wrongImg.style.display = "block";
                    num1.style.display = "none";
                    num2.style.display = "none";
                    const audio = new Audio('notMatch.mp3');
                    audio.play();
                }
                if (num1.innerText == 'PLAY') {
                  wrongImg.style.display = 'none';
                  if (num1.style.display = 'none') {
                    wrongImg.style.display = 'block';
                  }
                }
            break;

        default:
            rightImg.style.display = "none";
            wrongImg.style.display = "none";
            num1.style.display = "none";
            num2.style.display = "block";
            num2.innerText += key;
            const audio = new Audio('btn-click.mp3');
                    audio.play();
            if (num2.innerText > 100000 || num2.innerText == "000000") {
                document.getElementById("match-nmbr").innerText = "";
            }
            break;
    }
}

//IMAGE HANDER
Array.from(
  document.getElementsByTagName("img")
)
.forEach(
  (img) => {
  img.addEventListener("click", imgHandl)
  }
)
function imgHandl(){
  randomNmbr()
  let modeBtn = document.getElementById("mode").innerText;
 if (modeBtn == "CUSTOM") {
  num1.style.display = "block";
  const myTimeout = setTimeout(vanished, customSec());
 }
 else{
  num1.style.display = "block";
 }
  if (num1.innerText != "") {
      num2.innerText = "";
  }
  rightImg.style.display = "none";
  wrongImg.style.display = "none";
}

//TIME OUT FUNTION
function vanished(){
  num1.style.display = 'none';
  return vanished;
}