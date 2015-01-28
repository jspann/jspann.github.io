function train(){
  	document.getElementById("matchprogress").style.display = "block";
	FB.api("/me/interests",
    function (responsei) {
      if (responsei && !responsei.error) {
        /* handle the result */
        console.log("fisher");
        console.log("My interests are: " + responsei);
        console.log(responsei);
      }
    }
);


}

function runmethod(){
	alert("nice bro. Lets do this");
}