/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];
    const r=grid.length;
    const c=grid[0].length;
    const v=Array.from({length:r},()=>Array(c).fill(false));
    let cnt=0;

    function bfs(sx,sy){
        const q=[[sx,sy]];
        v[sx][sy]=true;
        while(q.length>0){
            const [x,y]=q.shift();
            for(let i=0;i<4;i++){
                const nx=x+dx[i];
                const ny=y+dy[i];
                if(nx<0||ny<0||nx>=r||ny>=c)continue;
                if(grid[nx][ny]!=="1")continue;
                if(v[nx][ny])continue;
                v[nx][ny]=true;
                q.push([nx,ny])
            }
        }
    }

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(grid[i][j]==="1"&&!v[i][j]) {
                cnt++;
                bfs(i,j);
            }
        }
    }

    return cnt;
};