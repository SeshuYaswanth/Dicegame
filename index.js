var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

// steps:-
// if player1 is greater than player2 then player 1 wins
// else if player2 is greater than player1 then player2 wins
// else draw

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<em>🚩</em> Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!<em>🚩</em>"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
