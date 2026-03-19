/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const r=grid.length;
    const c=grid[0].length;

    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];
    let m=0, t=0;
    const q=[];

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(grid[i][j]===2){
                q.push([i,j,0])
            }

            if(grid[i][j]===1){
                m++;
            }
        }
    }

    // 이미 썩었거나 오렌지가없다면
    while(q.length>0){
        const [x,y,d]=q.shift();
        for(let i=0;i<4;i++){
            const nx=x+dx[i];
            const ny=y+dy[i];
            if(nx<0||ny<0||nx>=r||ny>=c)continue;
            // 이미 썩었거나 오렌지가없다면
            if(grid[nx][ny]===0||grid[nx][ny]===2)continue;
            grid[nx][ny]=2 // 썩히기
            m--;
            t=d+1;         // 시간 갱신
            q.push([nx,ny,d+1]);
        }
    }

    return m === 0?t:-1;
};