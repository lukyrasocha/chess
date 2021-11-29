class Field{
    constructor(colour,x,y){
        this.x = x
        this.y = y
        this.colour = colour
    }

}
class Board {
    constructor(size) {
        this.size = size
        this.map = 0
    }

    createBoard() {
        var x = new Array(this.size)
        for (let i = 0; i < this.size; i++) {
            x[i] = new Array(this.size)
            
        }
        this.map = x
    }
    
    
}

mainBoard = new Board(6)
mainBoard.createBoard()

var letters = ['a','b','c','d','e','f']
var numbers = ['1','2','3','4','5','6']

var board = document.getElementById("board");  // get the board element

for(var i = 0; i < 6; i++) {                   // to create rows
  var row = document.createElement("div");     // create this row
  var letter = letters[i]
  for(var j = 0; j < 6; j++) {                 // to create cells
    var cell = document.createElement("div");  // create this cell
    var field = letter + numbers[j]
    if(i % 2 == j % 2){                         // do the math
      cell.className = "white" + " " + field;
      mainBoard.map[i][j] = new Field('white',i,j);
    }
    else{
      cell.className = "black" + " " + field;;
      mainBoard.map[i][j] = new Field('black',i,j);
    }
    row.appendChild(cell);                     // add this cell to the row
  }
  board.appendChild(row);                      // add this row to the board
}

console.log(mainBoard.map)
