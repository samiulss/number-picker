// MAIN SECTION
const num1 = document.getElementById("random-nmbr");
const num2 = document.getElementById("match-nmbr");
const rightImg = document.getElementById("right-img");
const wrongImg = document.getElementById("wrong-img");
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

document.getElementById("mode").addEventListener('click', changeMode());
function changeMode(){
  let modeBtn = document.getElementById("mode").innerText;
  if (modeBtn == 'EASY') {
    document.getElementById("mode").innerText = 'HARD'
    document.getElementById("mode").style.background = 'red';
  }
  if (modeBtn == 'HARD') {
    document.getElementById("mode").innerText = 'EASY';
    document.getElementById("mode").style.background = 'lime';
  }
  if (modeBtn == "EASY") {
    num1.addEventListener("click", function(){
      randomNmbr();
      const myTimeout = setTimeout(vanished, 4000);
    })
  }
  if (modeBtn == "HARD") {
    num1.addEventListener("click", function(){
      randomNmbr();
    })
  }
  return changeMode;
}

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
 if (modeBtn == "HARD") {
  num1.style.display = "block";
  const myTimeout = setTimeout(vanished, 4000);
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
function vanished(){
  num1.style.display = 'none';
  return vanished;
}