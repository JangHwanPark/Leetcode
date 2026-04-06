/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // 초기화
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const m = grid.length;
    const n = grid[0].length;
    const v = Array.from({length:m}, () => Array(n).fill(false));
    const q = [];
    let maxVal = 0;

    // 시작지점 찾기
    // loop -> [i][j] = 1 && 방문하지 않았을경우 시작
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 섬이거나 방문하지 않았다면 시작
            if (grid[i][j] === 1 && !v[i][j]) {
                q.push([i,j]);
                v[i][j] = true;
                let island = 1;

                while (q.length > 0) {
                    const [x, y] = q.shift();

                    // 현재 노드와 인접한 모든값 찾기
                    for (let k = 0; k < 4; k++) {
                        // 다음 위치 계산
                        const nx = x + dx[k];
                        const ny = y + dy[k];

                        // grid 범위 내부인지 확인
                        if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                        // 다음 위치가 이미 방문한 곳인지 확인
                        if (v[nx][ny]) continue;
                        // 섬인지 확인
                        if (grid[nx][ny] !== 1) continue;

                        // 큐에 다음 좌표 추가
                        q.push([nx,ny]);
                        // 방문처리
                        v[nx][ny] = true;
                        island++;
                    }
                }
                maxVal = Math.max(maxVal, island)
            }
        }
    }

    return maxVal;
};