/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let m = 0;
    const dx = [-1,-1,-1,0,0,1,1,1];
    const dy = [-1,0,1,-1,1,-1,0,1];
    const r = grid.length;
    const c = grid[0].length;

    if (grid[0][0] === 1 || grid[r-1][c-1] === 1) {
        return -1;
    }

    // 노드 큐에 넣고 상하좌우 계산
    // 그러면 시작점이 0이어야함
    const q = [[0, 0, 1]];
    const v = Array.from({length: r}, () => Array(c).fill(false));
    v[0][0] = true;

    while (q.length > 0) {
        const [x, y, d] = q.shift();
        if (x === r - 1 && y===c-1) {
            return d;
        }

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 범위 밖
            if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
                continue;
            }

            // 1이면
            if (grid[nx][ny] === 1) {
                continue;
            }

            // 방문했으면
            if (v[nx][ny]) {
                continue;
            }

            v[nx][ny] = true;
            q.push([nx, ny, d + 1]);
        }
    }

    return -1;
};