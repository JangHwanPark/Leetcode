/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // 8방향 처리
    const dx = [-1,-1,-1,0,0,1,1,1];
    const dy = [-1,0,1,-1,1,-1,0,1];

    // 방문 배열 설정
    const n = grid.length;
    const m = grid[0].length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    if (n === 1) return 1;
    const visited = Array.from({length:n},() => Array(n).fill(false));

    // 큐 설정 & 초기값 설정
    const queue = [[0,0,1]];
    visited[0][0] = true;

    // 순회
    while (queue.length) {
        const [x, y, step] = queue.shift();

        for (let i = 0; i < 8; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (visited[nx][ny] || grid[nx][ny] === 1) continue;
            if (nx === n - 1 && ny === n - 1) return step + 1;

            queue.push([nx, ny, step + 1]);
            visited[nx][ny] = true;
        }
    }

    // 이동 경로가 없으면 -1 반
    return -1;
};

// 1 0 0
// 1 1 0
// 1 1 0