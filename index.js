// function myFunction(){
//    location.reload();
    
// }

function myFunction(){
var randomNumber1;
    var randomNumber2;
    randomNumber1=Math.floor(Math.random()*6)+1;
    randomNumber2=Math.floor(Math.random()*6)+1;
    document.querySelector(".dice1 img").src="images/dice"+randomNumber1+".png";
    document.querySelector(".dice2 img").src="images/dice"+randomNumber2+".png";
    
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins!"
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins!"
    }
    else{
        document.querySelector("h1").innerHTML="Draw!"
    }

}


function myFunction1(){
    document.querySelector("h1").innerHTML="Dice Game!";
    document.querySelector(".dice1 img").src="images/dice6.png";
    document.querySelector(".dice2 img").src="images/dice6.png";
}
