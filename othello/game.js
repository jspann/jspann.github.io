/*
 * Othello game logic in javascript
 * Copyright James Spann 2016
 */

const BOARD_LENGTH = 8;
var board = new Array(BOARD_LENGTH);
var playerNum;//0(Black) or 1(White)
var moves = [-1, -1, -1, -1, -1, -1, -1, -1];

var x1 = function (a) {return a-1};
var x2 = function (a) {return a};
var x3 = function (a) {return a+1};
var y1 = function (a) {return a-1};
var y2 = function (a) {return a};
var y3 = function (a) {return a+1};

var xyplaces = [[x1,y1],[x1,y2],[x1,y3],[x2,y1],[x2,y3],[x3,y1],[x3,y2],[x3,y3]];

function initBoard(){
	for (var i = 0; i < BOARD_LENGTH; i++) {
	  board[i] = new Array(BOARD_LENGTH);
	}

	for(var h = 0; h < BOARD_LENGTH; h++){
		for(var w = 0; w < BOARD_LENGTH; w++){
			board[h][w] = "-";
		}
	}
}

function initPieces(){
	var elemNames = [28,29,36,37];//These are the IDs of the initial pieces
	for (var i = 0; i<elemNames.length; i++) {
		var t = idToArray(elemNames[i]);
		// console.log(t);

		var ename = "gameimage"+elemNames[i];
		var color = "";
		if (elemNames[i]%i==0) {
			color = "Black";
		}else{
			color = "White";
			
		}
		addToBoard(t[0],t[1],color[0]);
		document.getElementById(ename).setAttribute("src",color+".png");
		document.getElementById("blackPieces").innerHTML = "Black: 2 pieces";
		document.getElementById("whitePieces").innerHTML = "White: 2 pieces";
	};
	

}

function addToBoard(x,y,color) {
	board[x][y] = color;
}

function getCurrentColor(){
	return (playerNum == 1)?"Black":"White";
}

function getNotCurrentColor(){
	return (playerNum == 1)?"Black":"White";
}

///////////////////////////
/////Test place functions
///////////////////////////

function isOccupied(x,y){
	return !(board[x][y] == '-');
}

function getColorAt(x,y){
	return board[x][y];
}

function isValidPoint(x,y){
	if (x < 0 || x > BOARD_LENGTH || y > BOARD_LENGTH || y < 1) {
		return false;
	}
	return true
}

function checkLine(x,y,color,func1,func2){
	//-1 if not valid (can't move that way)
	//1 if a piece of the same color is right next to it
	//2 or more if can move that way

	if ( isValidPoint(func1(x),func2(y)) && isOccupied(func1(x),func2(y))) {
		if ( getColorAt( func1(x),func2(y) ) == color) {
			return 1;
		}else{
			//not same color
			var c = checkLine(func1(x),func2(y),color,func1,func2);
			// console.log("RETURNED: "+c);
			return (c == -1)?-1:c+1;
		}
	}
	return -1;
}

function isValidMove(x,y,color){
	//This assumes That we can put a point at
	//x,y with a color of "color"
	moves = [-1, -1, -1, -1, -1, -1, -1, -1];
	
	moves[0] = checkLine(x,y,color,x1,y1);//1
	moves[1] = checkLine(x,y,color,x1,y2);//2
	moves[2] = checkLine(x,y,color,x1,y3);//3

	moves[3] = checkLine(x,y,color,x2,y1);//4
	moves[4] = checkLine(x,y,color,x2,y3);//5

	moves[5] = checkLine(x,y,color,x3,y1);//6
	moves[6] = checkLine(x,y,color,x3,y2);//7
	moves[7] = checkLine(x,y,color,x3,y3);//8
	// console.log(moves);
	//array will be number of flips to make (what checkLine() returns)
	
	for (var i = 0; i<moves.length; i++) {
		if (moves[i] > 1) {
			return true;
		}
	};
	return false;
}

function flipPiece(elem,color,func1,func2,elemfunc,times){
	if (times == 1) {
		return;
	}else{
		var ename = "gameimage"+elemfunc( elem );
		// console.log("BRO:"+ename);
		// console.log("coloring:"+elemfunc( elem ));
		document.getElementById(ename).setAttribute("src",color+".png");
		var t = idToArray(elemfunc( elem ));
		addToBoard(t[0],t[1],color[0]);
		return flipPiece( elemfunc(elem),color,func1,func2,elemfunc,times-1);
	}
}

function flip(x,y,elem,color) {
	//color is the color they are flipped to
	var e1 = function (a) {return a-9};
	var e2 = function (a) {return a-1};
	var e3 = function (a) {return a+7};

	var e4 = function (a) {return a-8};
	var e5 = function (a) {return a+8};

	var e6 = function (a) {return a-7};
	var e7 = function (a) {return a+1};
	var e8 = function (a) {return a+9};



	var efunctions = [e1,e2,e3,e4,e5,e6,e7,e8];
	
	for(var i = 0; i<moves.length; i++){
		if (moves[i]>1) {
			flipPiece(elem,color,xyplaces[i][1],xyplaces[i][1],efunctions[i],moves[i]);
		}
	}
}

function swapPlayers(){
	playerNum = (playerNum == 1)?2:1;
}

function idToArray(elemId) {
	//Returns the values that will be used when the element
	//is referenced in the board's array.
	column = ((elemId%8) == 0)?8:(elemId%8)-1;
	row = Math.ceil(elemId/8);

	return [column,row];
}

function placePiece(elem){
	
	var pieceNum = Number(elem.substring(9,elem.length));
	// console.log("Row: "+Math.ceil(pieceNum/8));
	// console.log("Column: "+pieceNum%8);
	var t = idToArray(pieceNum);
	var myColor = getCurrentColor();
	if (isValidMove(t[0],t[1], myColor[0])) {
		addToBoard(t[0],t[1],myColor[0]);
		flip( t[0],t[1],pieceNum, getCurrentColor() );
		audio.play();
		return true;
	};
	return false;	
}