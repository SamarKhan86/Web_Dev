let gameSeq=[];
let userSeq=[];
let high = 0;
let btns = ["green", "yellow", "red", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
  if(started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}  

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}  

function levelUpflash() {
  document.body.classList.add("levelup-flash");
  setTimeout( () => {
    document.body.classList.remove("levelup-flash");
  }, 400);
}

function gameOverFlash() {
  document.body.classList.add("over-flash");
  setTimeout( () => {
    document.body.classList.remove("over-flash");
  }, 300);
}

function checkLevel(idx) {
  if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length === gameSeq.length) {
      levelUpflash();
      setTimeout( () => {
        levelUp();
      }, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <u>${level}</u>. Press any key to start again.`;
    gameOverFlash();
    reset();
  }
}

function levelUp() {
  userSeq = [];
  level++;

  let body = document.querySelector("body");
  btnFlash(body);
  h2.innerText = `Level ${level}`;

  let randIndx = Math.floor(Math.random() * 4);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);

  let i = 0;
  let interval = setInterval( function() {
    let color = gameSeq[i];
    let btn = document.querySelector(`.${color}`);
    btnFlash(btn);
    i++;
    if( i >= gameSeq.length ) {
      clearInterval(interval);
    }
  }, 500);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkLevel(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  if( level > high ) {
    high = level-1;
    document.querySelector("h3").innerText = `Highscore: ${high}`;
  }
  level = 0;
}

