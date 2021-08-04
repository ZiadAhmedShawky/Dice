var randomNumber1=Math.floor(Math.random()*6)+1;//1-6

var randomDiceImages="dice"+randomNumber1+".png";//dice1.png-dice6.png

//var randomImageSource="images/"+randomDiceImages;//images/dice1.png-dice6.png
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImages);

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6
var randomDiceImages2="dice"+randomNumber2+".png";
//var randomImageSource2="images/"+randonDiceImages2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImages2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="اللي متتسماش كسبت";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="الزوز كسب";
}
else {
  document.querySelector("h1").innerHTML="تعادل بين الفريقين";
}
