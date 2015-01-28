function train(){
	FB.api(
    "/me/interests",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        console.log("fisher");
        console.log("My interests are: " + response);
      }
    }
);
}

function runmethod(){
	alert("nice bro. Lets do this");
}