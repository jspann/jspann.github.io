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

function getMusic(myid){
  FB.api("/me/music",function (response) {
  if (response && !response.error) {
  intermusarray = response.data;
  for(var p = 0; p < intermusarray.length; p++){
  console.log(intermusarray[p]);
  }
  }
  });//end of music api call
}

function getTelevison(myid){
  FB.api("/me/television",function (response) {
    if (response && !response.error) {
      intertvarray = response.data;
      for(var p = 0; p < intertvarray.length; p++){
      console.log(intertvarray[p]);
      }
    }
  });//end of tv api call
}

function getBooks(myid){
  FB.api("/me/books",function (response) {
  if (response && !response.error) {
  interbookarray = response.data;
  for(var p = 0; p < interbookarray.length; p++){
  console.log(interbookarray[p]);
  }
  }
  });//end of book api call
}

function getMovies(myid){
  FB.api("/me/movies",function (response) {
  if (response && !response.error) {
  interbookarray = response.data;
  for(var p = 0; p < interbookarray.length; p++){
  console.log(interbookarray[p]);
  }
  }
  });//end of movies api call

  //MAYBE we'll do likes in the future
}