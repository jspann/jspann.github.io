function loadprojects(){
	
	var xmlhttp = new XMLHttpRequest();
	var myProjects;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myProjects = JSON.parse(this.responseText);
	    console.log(myProjects["projects"][0]);

	    for (var i = myProjects["projects"].length - 1; i >= 0; i--) {
			console.log(myProjects["projects"][i]);
			console.log(myProjects["projects"][i].title);
			// buildProjectBlock(myProjects["projects"][i].title, "wow a cool description would go here probably", "https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif1opt.gif",myProjects["projects"][i].color);//myProjects["projects"][i].backgroundImage);
			buildProjectBlock(myProjects["projects"][i].title, "wow a cool description would go here probably", "https://raw.githubusercontent.com/jspann/jspann.github.io/site2/frontimages/iessayicon.png",myProjects["projects"][i].color);//myProjects["projects"][i].backgroundImage);
		}
	    // document.getElementById("demo").innerHTML = myObj.name;
	  }
	};
	xmlhttp.open("GET", "https://raw.githubusercontent.com/jspann/jspann.github.io/site2/things.json", true);
	xmlhttp.send();

}

/*
<div class="projectSquare">
		<img class="projectImage" src="http://jspann.me/jspann.png">
		<div class="projectText">
			<p class="projectTitle">This goes here</p>
			<p class="projectDescription">Possibly a short description about how cool this </p>
		</div>
	</div>
	*/
function buildProjectBlock(projectName,projectSubtitle,projectImageURL,refcolor) {
	// var btn = document.createElement("BUTTON");
	// btn.innerHTML = "CLICK ME";
	// document.body.appendChild(btn);

	var projectSquare = document.createElement("div");
	projectSquare.className = "projectSquare";

	var projectImage = document.createElement("img");
	projectImage.className = "projectImage";
	projectImage.src = projectImageURL;
	projectSquare.appendChild(projectImage);


	var projectText = document.createElement("div");
	projectText.className = "projectText";
	// projectText.style.cssText = "opacity 0.6; background-color:"+refcolor+";";
	// projectText.style.cssText = "opacity 0.6; background-color:"+refcolor+";";
	projectText.onclick = function () {
		alert("stuff goes here!");
	};

	var projectTitle = document.createElement("h3");
	projectTitle.className = "projectTitle";
	projectTitle.innerHTML = projectName;
	projectText.appendChild(projectTitle);

	var projectDescription = document.createElement("p");
	projectDescription.className = "projectDescription";
	projectDescription.innerHTML = projectSubtitle;

	projectText.appendChild(projectDescription);

	projectSquare.appendChild(projectText);

	// document.getElementById("projectsBox").appendChild(btn);
	document.getElementById("projectsBox").appendChild(projectSquare);

}

function showProject(){
	alert("some information will go here!");
}