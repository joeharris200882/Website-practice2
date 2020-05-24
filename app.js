let button1, p1Score, p2Score, p1Choice, p2Choice;

p1Score = 0;
p2Score = 0;

//1. push the button to choose a random image, rock, paper, or scissors for both player 1 and player two (AI) simultaniously

document.getElementById("button1").addEventListener("click", function () {
  let picNum1 = Math.floor(Math.random() * 2.5);
  document.getElementById("gameChoice").src = "game-" + picNum1 + ".jpg";
  p1Choice = picNum1;

  let picNum2 = Math.floor(Math.random() * 2.5);
  p2Choice = picNum2;

  document.getElementById("gameChoice2").src = "game-" + picNum2 + ".jpg";

  //2. Win conditions/add to score counters

  let Rock = 0;
  let Paper = 1;
  let Scissors = 2;

  if (
    (picNum1 == Rock && picNum2 == Scissors) ||
    (picNum1 == Scissors && picNum2 == paper) ||
    (picNum1 == Paper && picNum2 == Rock)
  ) {
    p1Score += 1;
  } else if (
    (picNum2 == Rock && picNum1 == Scissors) ||
    (picNum2 == Scissors && picNum1 == paper) ||
    (picNum2 == Paper && picNum1 == Rock)
  ) {
    p2Score += 1;
  } else if (picNum1 === picNum2) {
  }
  document.getElementById("p1Scr").innerHTML = "Player 1 Score:" + p1Score;
  document.getElementById("p2Scr").innerHTML = "Player 2 Score:" + p2Score;


  //3. First Player to 5 wins is the champ!

  if (p)
});

//1. This Works
//document.getElementById("button1").addEventListener("click", function () {
//let pushed = Math.floor(Math.random() * 10);
//document.getElementById("button1").innerHTML = "I am Pushed";

//2. This also works
//document.getElementById("button2").addEventListener("click", function () {
// document.getElementById("img1").style.display = "none";
//});
