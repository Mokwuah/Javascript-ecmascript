const prompt = require("prompt-sync")()

function makeMove(turn, board){
    while(true){
        console.log("Enter Row: ")
    const row = parseInt(prompt("> "))
    console.log("Enter Column: ")
    const col = parseInt(prompt("> "))

    if(isNaN(row) || row < 1 || row > 3){
        console.log("Invalid Row.")
    }else if(isNaN(col) || col < 1 || col > 3){
        console.log("Invalid Column.")
    }else if(board[row -1][col - 1]!= " "){
        console.log("Invalid Position.")
    }
    else{
        board[row -1][col - 1] = turn
        break;
    }
  }  
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

