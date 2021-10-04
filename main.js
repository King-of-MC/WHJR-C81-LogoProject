var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var color="blue";
// A GAP 
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
// A GAP

canvas.addEventListener("mousedown",mymousedown);

// A GAP 

function mymousedown(e) {
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    
    console.log("x-"+mouse_x+", y-"+mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y) {
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}