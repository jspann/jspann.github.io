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
  FB.api("/"+myid+"/music",function (response) {
    if (response && !response.error) {
      /*intermusarray = response.data;
      for(var p = 0; p < intermusarray.length; p++){
      console.log(intermusarray[p]);
      }*/
      return response.data;
    }
  });//end of music api call
}

function getTelevison(myid){
  FB.api("/me/television",function (response) {
    if (response && !response.error) {
      /*intertvarray = response.data;
      for(var p = 0; p < intertvarray.length; p++){
      console.log(intertvarray[p]);
      }*/
      return response.data;
    }
  });//end of tv api call
}

function getBooks(myid){
  FB.api("/"+myid+"/books",function (response) {
    if (response && !response.error) {
      /*interbookarray = response.data;
      for(var p = 0; p < interbookarray.length; p++){
      console.log(interbookarray[p]);
      }*/
      return response.data;
    }
  });//end of book api call
}

function getMovies(myid){
  FB.api("/"+myid+"/movies",function (response) {
    if (response && !response.error) {
      /*interbookarray = response.data;
      for(var p = 0; p < interbookarray.length; p++){
      console.log(interbookarray[p]);
      }*/
    	return response.data;
    }
  });//end of movies api call

  //MAYBE we'll do likes in the future
}

function getPhoto(myid){
	FB.api("/"+myid+"/picture",
      {
        "redirect": false,
        "height": "100",
        "type": "normal",
        "width": "100"
      },function (responsez) {
        if (responsez && !responsez.error) {
          //console.log("algorithim Call");
          //console.log(responsez);
          //console.log(responsez.data.url);
          return responsez.data.url;
          //myimglocation = responsez.data.url;
          //document.getElementById('myimage').src = myimglocation;
        }
      });//end of getting friend photo loop
}

function shareMatch(){
  FB.ui(
  {
    method: 'share',
    href: 'http://jspann.me/match/',
  },
  function(response) {
    if (response && !response.error_code) {
      alert('Posting completed.');
    } else {
      alert('Error while posting.');
    }
  }
);
}