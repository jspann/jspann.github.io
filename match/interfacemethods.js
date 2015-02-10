(function () {
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', domReady, false);
    } else {
        window.attachEvent('onload', domReady);
    }
} ());

var privacyBool;

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

function showPrivacy(){
  $('#privacybox').animate({top: "50%"}, 2000);
  privacyBool = 1;
}

function hidePrivacy(){
  $('#privacybox').animate({top: "-50%"}, 2000);
  privacyBool = 0;
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

  document.getElementById("boom").style.zIndex = "-1";
  //document.getElementById("myimage").src = "http://jspann.me/mmm/randimg" + Math.floor((Math.random() * 3) + 0) + ".jpg";
  document.getElementById("myimage").src = "randimg" + Math.floor((Math.random() * 4) + 0) + ".jpg";
  //document.getElementById("derpyalert").style.display = "none";
  document.getElementById("matchprogress").max = 100;
  document.getElementById("matchprogress").style.display = "none";

  privacyBool = 0;

  document.getElementById("gobutton").onclick = function() {
   alert("button was clicked");
   compute(myidentifier);
   updateMatch();
   animate();

};

document.getElementById("hidealertbutton").onclick = function() {
  //hideAlert();
  // $('#maximumwin').animate({top: "-50%"}, 2000);
  compute(myidentifier);
  document.getElementById("boom").style.zIndex = "4";
  //updateMatch();
  animate();
};

document.getElementById("hidemyprivacystuff").onclick = function() {
  if (privacyBool == 1) {//we need to hide it
    hidePrivacy();
  } else{//we need to show it
    showPrivacy();
  };

};

if(window.location.hash) {
  // Fragment exists
  //alert("To match your profile with your friends we will need to compare some of your Facebook information.\
   //We will not display or store this information in any way.");
  showPrivacy();
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


//start explosion things
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

  /*W = bigger.innerWidth,
  H = bigger.innerHeight;*/

/*canvas.width = W;
canvas.height = H; */

}


