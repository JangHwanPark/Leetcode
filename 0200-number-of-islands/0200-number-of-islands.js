/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cnt=0;
    const r=grid.length;
    const c=grid[0].length;
    const v=Array.from({length:r},()=>Array(c).fill(false));
    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];

    function dfs(x,y){
        if(x<0||y<0||x>=r||y>=c)return;
        if(grid[x][y]!=="1")return;
        if(v[x][y])return;
        v[x][y]=true;
        for(let i=0;i<4;i++){
            const nx=x+dx[i];
            const ny=y+dy[i];
            dfs(nx,ny);
        }
    }

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(grid[i][j]==="1"&&!v[i][j]){
                cnt++;
                dfs(i,j);
            }
        }
    }
    return cnt;
};