/* Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false */

function validSolution(board) {
    //   console.log(board);

    var valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = true;

    loop1: for (var i = 0; i < board.length - 2; i = i + 3) {
        loop2: for (var j = 0; j < board.length - 2; j = j + 3) {
            console.log(i, j);

            var arr1 = board[i].slice(j, j + 3);
            var arr2 = board[i + 1].slice(j, j + 3);
            var arr3 = board[i + 2].slice(j, j + 3);
            var arr = arr1.concat(...arr2, ...arr3);
            console.log(arr);

            arr.sort((a, b) => a - b);
            console.log(arr);

            //  check if the elements are unique
            //     arr.sort((a,b)=>a-b);
            //     if (arr[i] == arr[i+1]){
            //       return false
            //     }

            loop3: for (var x = 0; x < arr.length; x++) {
                console.log(result);
                if (arr[x] != valid[x]) {
                    result = false;
                    console.log(result);
                    break loop1;
                }
            }
        }
    }
    return result;
}