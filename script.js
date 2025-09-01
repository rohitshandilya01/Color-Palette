var btn = document.querySelector(".btn");
var para = document.querySelector(".para");
var main = document.querySelector(".main");



const change_color = () => {
    var randomNumber = Math.floor(Math.random()* 16777215) ;
    var randomcolor = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomcolor);
 main.style.backgroundColor = randomcolor;
 para.innerText = randomcolor;

navigator.clipboard.writeText(randomcolor);


}

document.querySelector(".btn").addEventListener(
    "click",
    change_color
);



change_color();