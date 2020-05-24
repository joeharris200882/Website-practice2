let button1, p1Score, p2Score, p1Choice, p2Choice;

p1Score = 0;
p2Score = 0;

//1. push the button to choose a random image, rock, paper, or scissors for both player 1 and player two (AI) simultaniously

document.getElementById("button1").addEventListener("click", function () {
  let picNum1 = Math.floor(Math.random() * 2.5);
  document.getElementById("gameChoice").src = "game-" + picNum1 + ".jpg";
  p1Choice = picNum1;
});

document.getElementById("button1").addEventListener("click", function () {
  let picNum2 = Math.floor(Math.random() * 2.5);
  p2Choice = picNum2;

  document.getElementById("gameChoice2").src = "game-" + picNum2 + ".jpg";
});

document.getElementById("p1Scr").innerHTML = "Player 1 Score:" + p1Score;
document.getElementById("p2Scr").innerHTML = "Player 2 Score:" + p2Score;

console.log(p1Score);

//2. Images appear,

//a)if 0:2 - Rock wins
//b)if 0:1 - Paper wins
//c)if 1:2 - Scissors wins
//d)if 2:2 - Draw, if 1:1 - Draw, if 1:1 - Draw

//3. Depending on who wins, that Players score counter goes up
//4. First Score Counter to reach x  winner!

//models for what work

//document.querySelector(".dice").style.display = "none";

//1. This Works
//document.getElementById("button1").addEventListener("click", function () {
//let pushed = Math.floor(Math.random() * 10);
//document.getElementById("button1").innerHTML = "I am Pushed";

//2. This also works
//document.getElementById("button2").addEventListener("click", function () {
// document.getElementById("img1").style.display = "none";
//});
