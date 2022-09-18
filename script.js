window.onload = function () {
	
const canvas = document.getElementById("canvas");
const btnt = document.getElementById("btnt");
const btnr = document.getElementById("btnr");
const btnb = document.getElementById("btnb");
const btnl = document.getElementById("btnl");
const context = canvas.getContext("2d");

canvas.style.border = "2px solid black"

const rad = 20;
var randx = Math.floor(Math.random()*400);
var randy = Math.floor(Math.random()*400);
var x = 20;
var y = 20;

btnt.onmousedown = function() {
	y-=40;
}
btnr.onmousedown = function() {
	x+=40;
}
btnb.onmousedown = function() {
	y+=40;
}
btnl.onmousedown = function() {
	x-=40;
}


var t, sc=0;
function rand(){
  context.clearRect(0,0,400,400);
  context.beginPath();
  if (x > 400) x = x-400;
  if (y > 400) y = y-400;
  if (x < 0) x = x+400;
  if (y < 0) y = y+400;
  context.arc(x, y, rad, 0, 6.28);
  context.fillStyle="blue";
  context.fill();
  
  if (Math.abs(x-randx)<30 && Math.abs(y-randy)<30) {
	  sc+=1;
	  randx = Math.floor(Math.random()*400);
	  randy = Math.floor(Math.random()*400);
  }

  
  context.beginPath();
  context.font = "20px Arial";
  context.fillStyle = "green"
  context.fillText("Score: "+sc, 310, 30);
  

  context.beginPath();
  context.arc(randx, randy, rad/4, 0, 6.28);
  context.fillStyle="red";
  context.fill();
}


//rand()
setInterval(rand, 300)
}
