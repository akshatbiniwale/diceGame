var randomNumber1, randomNumber2;
randomNumber1 = Math.floor(Math.random()*6);
randomNumber2 = Math.floor(Math.random()*6); 
var arr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".dice .img1").setAttribute("src", arr[randomNumber1]);
document.querySelector(".dice .img2").setAttribute("src", arr[randomNumber2]);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
