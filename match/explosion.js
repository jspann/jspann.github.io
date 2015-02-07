//EXPLOSION ANIMATION CODE

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame    || 
      window.oRequestAnimationFrame      || 
      window.msRequestAnimationFrame     || 
      function( callback ){
      window.setTimeout(callback, 1000 / 60);
      };
})();

var bigger = document.getElementById("maximumwin");

var canvas = document.getElementById("boom"),
  ctx = canvas.getContext("2d"),
  W = bigger.innerWidth,
  H = bigger.innerHeight,
  circles = [];

canvas.width = W;
canvas.height = H; 


//Random Circles creator
function create() {
  
  //Place the circles at the center
  
  this.x = W/2;
  this.y = H/2;

  
  //Random radius between 2 and 6
  this.radius = 2 + Math.random()*3; 
  
  //Random velocities
  this.vx = -5 + Math.random()*10;
  this.vy = -5 + Math.random()*10;
  
  //Random colors
  this.r = Math.round(Math.random())*255;
  this.g = Math.round(Math.random())*255;
  this.b = Math.round(Math.random())*255;
}

for (var i = 0; i < 500; i++) {
  circles.push(new create());
}

function draw() {
  
  //Fill canvas with black color
    /*ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, W, H);*/
  
  //Fill the canvas with circles
  for(var j = 0; j < circles.length; j++){
    var c = circles[j];
    
    //Create the circles
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
    ctx.fill();
    
    c.x += c.vx;
    c.y += c.vy;
    c.radius -= .02;
    
    if(c.radius < 0)
      circles[j] = new create();
  }
}

function animate() {
  startupexplo();
  requestAnimFrame(animate);
  draw();
}

animate();