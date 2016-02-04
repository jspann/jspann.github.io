var board = new Array(8);
var playerNum = 1;//one or 2

function init(){
	for (var i = 0; i < 8; i++) {
	  board[i] = new Array(8);
	}

	for(var h = 0; h < 8; h++){
		for(var w = 0; w < 8; w++){
			board[h][w] = "-";
		}
	}

}

function placePiece(elem) {
	// console.log(elem.id);
	//document.getElementById(elem.id).substring(6);
	var pieceColor = "";
	if (playerNum == 1) {
		pieceColor = "Black"
	}

	if (playerNum == 2) {
		pieceColor = "White"
	}
	drawCircle(pieceColor, elem.id)

	if (playerNum == 1) {
		playerNum = 2;
	}else{
		playerNum = 1;
	}
	// console.log(Math.floor(elem.id.substring(6)/9));
	// console.log(elem.id.substring(6)%9);
	console.log(Math.floor(elem.id.substring(6)/8))
	console.log(Math.floor(elem.id.substring(6)%8))
	console.log("---");
	console.log(board[1][1]);
	//board[Math.floor(elem.id.substring(6)/8)][Math.floor(elem.id.substring(6)%8)] = pieceColor;
}

function drawCircle(circColor, elementname) {
	console.log(elementname)
	var canvas = document.getElementById(elementname);
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 4;
	var centerY = canvas.height / 4;
	var radius = 20;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = circColor;
	context.fill();
	// context.lineWidth = 5;
	// context.strokeStyle = '#003300';
	context.stroke();
}