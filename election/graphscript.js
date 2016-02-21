
	//var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
function calcDelegatePercent(numDel,totalDel) {
	return (numDel/totalDel)*100;
	// return numDel;
}
	var barChartData = {
		labels : ["Trump","Cruz","Rubio","Kasich","Carson"],
		datasets : [
			{
				fillColor : "rgba(220,0,0,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [calcDelegatePercent(61,1237), calcDelegatePercent(11,1237), calcDelegatePercent(10,1237),calcDelegatePercent(5,1237),calcDelegatePercent(3,1237)]
			}
		]

	}

	window.onload = function(){
			
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});

		console.log("oobaby");
	}
