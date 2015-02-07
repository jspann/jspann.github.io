(function () {
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', domReady, false);
    } else {
        window.attachEvent('onload', domReady);
    }
} ());

function rgbj(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function domReady() {
  var d = new Date();
  var n = d.getFullYear();
  var t = "© James Spann " + n;
  document.getElementById("jamescopyright").innerHTML = t;
  console.log(t);
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // some code..
   alert("Warning!\nThis program might not function properly when viewed on a mobile device!");
  }

  //document.getElementById("myimage").src = "http://jspann.me/mmm/randimg" + Math.floor((Math.random() * 3) + 0) + ".jpg";
  document.getElementById("myimage").src = "randimg" + Math.floor((Math.random() * 4) + 0) + ".jpg";
  //document.getElementById("derpyalert").style.display = "none";
  document.getElementById("matchprogress").max = 100;
  document.getElementById("matchprogress").style.display = "none";

  document.getElementById("gobutton").onclick = function() {
   alert("button was clicked");
   compute(myidentifier);
};

document.getElementById("hidealertbutton").onclick = function() {
  //hideAlert();
  // $('#maximumwin').animate({top: "-50%"}, 2000);
  compute(myidentifier);
};

if(window.location.hash) {
  // Fragment exists
  alert("To match your profile with your friends we will need to compare some of your Facebook information.
   We will not display or store this information in any way.");
} else {
  // Fragment doesn't exist
}

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,document.getElementById("myCanvas").width,document.getElementById("myCanvas").height);

  var grd = ctx.createLinearGradient(0, 200, 0, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "purple");

ctx.fillStyle = grd;
ctx.fillRect(0,0,document.getElementById("myCanvas").width,document.getElementById("myCanvas").height);
}


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

var bigger = document.getElementById("maximumwin"),

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
  requestAnimFrame(animate);
  draw();
}

animate();