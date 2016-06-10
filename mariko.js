 var a = 0;
 var b;
 function neko2(){
		 b=setInterval("neko1()",100);
		
 }
 
function neko1(){
	var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

x =  Math.floor( Math.random() * 791 ) +10  ;
y = Math.floor( Math.random() * 791 )+10  ;
r =  Math.floor( Math.random() * 6 ) + 5 ;

ctx.lineWidth = 0.5;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'lightgrey';
ctx.beginPath();
ctx.moveTo(x + Math.sin(0 * 2 * Math.PI / 5) * r, y - Math.cos(0 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(2 * 2 * Math.PI / 5) * r, y - Math.cos(2 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(4 * 2 * Math.PI / 5) * r, y - Math.cos(4 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(1 * 2 * Math.PI / 5) * r, y - Math.cos(1 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(3 * 2 * Math.PI / 5) * r, y - Math.cos(3 * 2 * Math.PI / 5) * r);
ctx.lineTo(x + Math.sin(0 * 2 * Math.PI / 5) * r, y - Math.cos(0 * 2 * Math.PI / 5) * r);
ctx.fill();
ctx.stroke();
ctx.closePath();
 a++;
  		 if(a==100){
			 clearInterval(b);
			 
 }
 }
 

 // JavaScript Document
