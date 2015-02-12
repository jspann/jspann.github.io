var theMatch = [0,0];//name, score

function compute(myid){
    console.log("We are computuing!!!" + myid);
    document.getElementById("matchprogress").style.display = "block";
    document.getElementById("matchprogress").max = myFriends.length;
    console.log("here is the total array");
    console.log(myFriends);

    document.getElementById('myimage').src = myimglocation;

    var totalResultsArray;//

    var likecount;//number that ME and friend have in common (incremented)
    

    if (myFriends.length == 0) {
      //set the finalID equal to self
      theMatch[1] = myidentifier;//SELF
    } else{
      var mySexyInterests = [];
//      mySexyInterests = getlikes("me");
      var myVar=setTimeout(function(){console.log("Ran pause")},2000);

      FB.api("/me/likes",function (response) {
            if (response && !response.error) {
              /* handle the result */
              mySexyInterests = response;
              console.log("before sexiness: "+mySexyInterests)
            }else{
              console.log("error in getting your likes: " + response.error);
            }
          }
      );
      console.log("feeling sexy: " + mySexyInterests);
      for (var i = 0; i < myFriends.length; i++) {
        console.log("woo!");
        console.log(myFriends[i]);
        
        document.getElementById("matchprogress").value = i+1;
        
        if (getlikeCount(myFriends[i].id) == 0) {
			//Set theMatch id (1) equal to my id
      theMatch[1] = myidentifier;//SELF
      console.log("my friend has no likes:" + theMatch);
        }else{
          var tempLikeArray = [];
//          tempLikeArray = getlikes(myFriends[i].id);
          tempLikeArray[1]=4;
          tempLikeArray[2]=6;
          
      console.log("feeling super sexy: " + mySexyInterests);
          for (var d = 0; d < mySexyInterests.length; d++){
            console.log("next me");
            for (var t = 0; t < tempLikeArray.length; t++) {
              
              console.log("david");

              if (mySexyInterests[d] == tempLikeArray[e]) {
                console.log("WE HAVE A MATCH:"+ mySexyInterests[d] + " |" +tempLikeArray[e]);
                likecount++;
              } else{
                //no match
              }
              console.log("after");
            }//end t for loop
          }//end d for loop
          
			tempLikeArray = null;
			if ((likecount/getlikeCount("me")) > theMatch[0]) {
			  //set match
			  theMatch[0] = (likecount/getlikeCount("me"));
			  theMatch[1] = myFriends[i].id;
			} else{
			  //do nothing
			}//end reset score if statement

        }//end of tempLikeArray exception if statement
        
        
      }//end of friend for loop

      //last rites
      bestmatchID =  theMatch[1];

    }//close of no friend if statement

  }//end of compute