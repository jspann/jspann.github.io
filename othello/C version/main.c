/*A basic othello game
 *Created by James Spann.
 *Date: 1/28/2016
 */

#include <stdio.h>
#include <stdbool.h>

char board[8][8];//h,w
int boardLines[] = {0,0,0,0,0,0,0,0};
int spacesFilled = 0;

int currentPlayer = 1;//1(Black) or 2(White)
int blackpieces = 2;//automatically start with 2
int whitepieces = 2;//automatically start with 2


void placePiece(int x, int y, char val){
	board[x][y] = val;
}

void startGame(){
	for (int h = 0; h < 8; h++){
		for (int w = 0; w < 8; w++){
			placePiece(w,h,'-');
		}
	}

	placePiece(3,3,'B');
	placePiece(4,3,'W');
	placePiece(3,4,'W');
	placePiece(4,4,'B');
}

void printBoard(){
	for (int h = 0; h < 8; h++){
		for (int w = 0; w < 8; w++){
			printf("[%c]", board[w][h]);
		}
		printf("\n");
	}
}

bool gameOver(){
	return spacesFilled == 64 || whitepieces == 0 || blackpieces == 0;
}

bool spaceOccupied(int x, int y){
	return board[x][y] != '-';
}

bool sameColor(int x, int y, char val){
	return board[x][y] == val;
}

void resetboardlines(){
	
	for (int i = 0; i < 8; i++){
		boardLines[i] = 0;
	}
}


void flip(int x, int y, char val){
	if (boardLines[0]==1){
		int tempX = x-1;
		int tempY = y-1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempX--;
			tempY--;
		}
	}

	if (boardLines[1]==1){
		int tempX = x-1;
		int tempY = y;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempX--;
		}
	}

	if (boardLines[2]==1){
		int tempX = x-1;
		int tempY = y+1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempX--;
			tempY++;
		}
	}

	if (boardLines[3]==1){
		int tempX = x;
		int tempY = y-1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempY--;
		}
	}

	if (boardLines[4]==1){
		int tempX = x;
		int tempY = y+1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempY++;
		}
	}

	if (boardLines[5]==1){
		int tempX = x+1;
		int tempY = y-1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempX++;
			tempY--;
		}
	}

	if (boardLines[6]==1){
		int tempX = x+1;
		int tempY = y;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempX++;
		}
	}

	if (boardLines[7]==1){
		int tempX = x+1;
		int tempY = y+1;
		while (spaceOccupied(tempX,tempX) && !sameColor(tempX,tempY,val)){
			placePiece(tempX,tempY,val);
			tempY++;
			tempX++;
		}
	}

}
bool isMoveLegal(int x, int y, char val){
	///[-][-][-]
	///[-][x][-]
	///[-][-][-]

	///[1][4][6]
	///[2][x][7]
	///[3][5][8]

	///Left Column
	if (spaceOccupied(x-1,y-1) && !sameColor(x-1,y-1,val) ){//1
		int tempX = x-1;
		int tempY = y-1;
		while(tempX>=0 && tempY>=0){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[0] = 1;
			}
			tempX--;
			tempY--;
		}
	}
	if(spaceOccupied(x-1,y) && !sameColor(x-1,y,val)){//2
		int tempX = x-1;
		int tempY = y;
		while(tempX>=0){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[1] = 1;
			}
			tempX--;
		}
	}
	if (spaceOccupied(x-1,y+1) && !sameColor(x-1,y+1,val)){//3
		int tempX = x-1;
		int tempY = y+1;
		while(tempX>=0 && tempY<8){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[2] = 1;
			}
			tempX--;
			tempY++;
		}
	}



	///Center column
	if (spaceOccupied(x,y-1) && !sameColor(x,y-1,val)){//4
		int tempX = x;
		int tempY = y-1;
		while(tempY>=0){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[3] = 1;
			}
			tempY--;
		}
	}

	if (spaceOccupied(x,y+1) && !sameColor(x,y+1,val)){//5
		int tempX = x;
		int tempY = y+1;
		while(tempY<8){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[4] = 1;
			}
			tempY++;
		}
	}
	


	///Right column
	if (spaceOccupied(x+1,y-1) && !sameColor(x+1,y-1,val)){//6
		int tempX = x+1;
		int tempY = y-1;
		while(tempY>=0 && tempX<8){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[5] = 1;
			}
			tempY--;
			tempX++;
		}
	}
	
	if (spaceOccupied(x+1,y) && !sameColor(x+1,y,val)){//7
		int tempX = x+1;
		int tempY = y;
		while(tempY<8){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[6] = 1;
			}
			tempX++;
		}
	}
	if (spaceOccupied(x+1,y+1) && !sameColor(x+1,y+1,val)){//8
		int tempX = x+1;
		int tempY = y+1;
		while(tempY<8 && tempX<8){
			if( sameColor(tempX,tempY,val) ){
				//we have a line!
				boardLines[7] = 1;
			}
			tempY++;
			tempX++;
		}
	}
	
	return boardLines[0] == 1 || boardLines[1] == 1|| boardLines[2] == 1|| boardLines[3] == 1|| boardLines[4] == 1|| boardLines[5] == 1 || boardLines[6] == 1 || boardLines[7] == 1;

}

void makeMove(int x, int y, char val){
	if (spaceOccupied(x,y) == true){//enduce quantumness
		
	}else{
		placePiece(x,y,val);
		flip(x,y,val);
	}
	spacesFilled++;
	currentPlayer = (currentPlayer == 1)?2:1;
}

void runGame(){

	while (!gameOver()){
		int currx;
		int curry;
		char currVal = (currentPlayer == 1)?'B':'W';

		printf("%s's turn!\n", (currVal == 'B')?"Black":"White");
		printf("Enter your x value: ");
		scanf("%d",&currx);
		printf("Enter your y value: ");
		scanf("%d",&curry);

		if (isMoveLegal(currx,curry,currVal) == true){
			makeMove(currx,curry,currVal);
		}else{
			printf("Error in making move!\n");
		}

		resetboardlines();
		printBoard();
		printf("(----------------)\n\n\n");
	}
}

int main(){
	startGame();
	printBoard();
	runGame();
	return 0;
}