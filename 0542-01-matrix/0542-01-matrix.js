/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    console.log(mat)
    const r=mat.length;
    const c=mat[0].length;
    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];
    const q=[];

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(mat[i][j]===0) q.push([i,j]);
            else mat[i][j]=Infinity;
        }
    }

    // d = 1부터 0까지 거리재는 변수
    // 시작점 i j에서 상하좌우 탐색
    // 0이있다면 넘김
    // 현재 좌표값이 1이라면 가장 가까운 0까지 거리 세야함
    while(q.length>0){
        const [x,y]=q.shift();
        for(let i=0;i<4;i++){
            const nx=x+dx[i];
            const ny=y+dy[i];
            if(nx<0||ny<0||nx>=r||ny>=c)continue;
            if(mat[nx][ny]!==Infinity)continue;
            mat[nx][ny]=mat[x][y]+1;
            q.push([nx,ny]);
        }
    }

    // 반환 = 매트릭스
    return mat;
};