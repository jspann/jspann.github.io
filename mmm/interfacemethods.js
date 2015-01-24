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