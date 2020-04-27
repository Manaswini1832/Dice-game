var randomNumber1 = Math.floor((Math.random()*6)+1) ;
var randomNumber2 = Math.floor((Math.random()*6)+1) ;

document.querySelector(".img1").setAttribute("src" , "dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src" , "dice" + randomNumber2 +".png");

//If player1 wins
if (randomNumber1 >randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//If player 2 wins
if (randomNumber1 <randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//For a draw
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";

}
