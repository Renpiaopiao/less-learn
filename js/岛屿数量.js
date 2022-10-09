/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    function dfs(grid,r,c){
        let nr = grid.length
        let mr = grid[0].length
        if(r>=nr || c>=mr || c<0 || r<0 || grid[r][c]=='0') return
        grid[r][c] = "0"
        dfs(grid,r-1,c)
        dfs(grid,r+1,c)
        dfs(grid,r,c-1)
        dfs(grid,r,c+1)
    }
    let n = grid.length
    if(!n) return 0
    let m = grid[0].length

    let nums = 0

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j] == '1'){
                console.log(i,j);
                nums++
                dfs(grid,i,j)
            }
        }
    }

    return nums
};

console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]));