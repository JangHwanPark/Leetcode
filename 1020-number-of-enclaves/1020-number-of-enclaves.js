/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    // 격자의 경계(undefined와 값이 있는것)외 내부 육지(1)의 칸수를 카운트해서 반환
    // 격자 테두리 전부 방문처리하고 시작
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({length:m},() => Array(n).fill(false));
    console.log(m, n)
    // 격자 탐색이니 dx dy 사용
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];

    // 카운트 계산이라 cnt 변수 생성
    let cnt = 0;

    // 탐색은 dfs로 할예정
    // bfs로해도 상관없을듯
    // 다음노드에서 상하좌우 탐색해야하니까
    // x, y값 받아야함
    function dfs(x, y) {
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 경계를 넘어가는지 확인
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            // 방문여부 확인
            if (visited[nx][ny]) continue;

            // 육지 여부 확인
            if (grid[nx][ny] === 0) continue;
            
            // 방문처리
            visited[nx][ny] = true;

            // dfs 실행
            dfs(nx, ny);
        }
    }

    // 격자 경계면에 있는 테두리 방문처리
    for (let i = 0; i < m; i++) {
        if(grid[i][0] === 1) {
            visited[i][0] = true;
            dfs(i,0);
        }
        if(grid[i][n-1] === 1) {
            visited[i][n-1] = true;
            dfs(i,n-1);
        }
    }

    for (let i = 0; i < n; i++) {
        if(grid[0][i] === 1) {
            visited[0][i] = true;
            dfs(0,i);
        }
        if(grid[m-1][i] === 1) {
            visited[m-1][i] = true;
            dfs(m-1,i);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 방문하지 않았고 육지인 칸수 갯수 세기
            if (!visited[i][j] && grid[i][j] === 1) cnt++;
        }
    }

    return cnt;
};