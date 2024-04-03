// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontall
// or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

var exist = function(board, word) {
    const row = board.length
    const col = board[0].length

    const dfs = (x,y,k) =>{
        if( k === word.length )
            return true;
        
        if( x < 0     ||
            x >= row  ||
            y < 0     ||
            y >= col  ||
            word.charAt(k) !== board[x][y]
         ) return false;

        const visited = board[x][y]
        board[x][y] = "."
        var result = dfs(x+1, y, k+1) || //right
                     dfs(x-1, y, k+1) || //left
                     dfs(x, y+1, k+1) || //up
                     dfs(x, y-1, k+1);   //downn
        board[x][y] = visited;
        return result;
    };

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(dfs(i,j,0))
                return true;
        }
    }
    return false
};