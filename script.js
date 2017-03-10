var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function drawBall()
{
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
	drawBall(); // draws the ball
	x += dx; // increments x by dx
	y += dy; // increments y by dy
}

setInterval(draw, 10); // executes draw() each 10 ms