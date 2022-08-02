window.onload = function(){
 let btn = document.getElementById("jump");
 btn.onclick = function(){
   count ++;
   y -= 25;
   context.clearRect(0,0,600,400);
   context.beginPath();
   circle();
   text();
	}
};
let count = 0;
//get canvas
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 300;
let y = 350;
//drawing red circle 
function circle(){
 context.arc(x,y,50,0,2*Math.PI);
 context.fillStyle = "red";
 context.fill();
};
circle();
// dawing count text
function text() {
 context.font = "25px, Arial";
 context.fillStyle = "White";
 context.fillText("Count :" + count, 20, 30)
};
text();
