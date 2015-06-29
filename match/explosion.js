//EXPLOSION ANIMATION CODE


var circles = [];
var W;
var H;
var anicanvas;
var anictx;

var countCir;//so we can stop after a certain point

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

for (var i = 0; i < 120; i++) {
  circles.push(new create());
}

function draw() {
  
  //Fill canvas with black color
    anictx.globalCompositeOperation = "source-over";
    anictx.fillStyle = "rgba(0,0,0,0.15)";
    anictx.fillRect(0, 0, W, H);
  
  //Fill the canvas with circles
  for(var j = 0; j < circles.length; j++){
    var c = circles[j];
    
    //Create the circles
    anictx.beginPath();
    anictx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
    anictx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
    anictx.fill();
    
    c.x += c.vx;
    c.y += c.vy;
    c.radius -= .02;
    
    if(c.radius < 0)
      circles[j] = new create();
  }
}

function animate() {
  //THIS IS SO ANNOYING console.log("Look mom! I'm animated!");
  anicanvas = document.getElementById("boom");
  anictx = anicanvas.getContext("2d");

  W = document.getElementById("boom").width;
  H = document.getElementById("boom").height;
  //startupexplo();
  requestAnimFrame(animate);
  draw();
}

