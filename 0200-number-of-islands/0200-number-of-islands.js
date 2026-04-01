/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const v = Array.from({length: row}, () => Array(col).fill(-1));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let cnt = 0;

    function dfs(r, c) {
        v[r][c] = 1;
        for (let i = 0; i < 4; i++) {
            const nx = r + dx[i];
            const ny = c + dy[i];

            if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
            if (grid[nx][ny] !== "1") continue;
            if (v[nx][ny] !== -1) continue;
            dfs(nx, ny);
        }
    }

    // 초기값
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1" && v[i][j] === -1) {
                cnt++;
                dfs(i, j)
            }
        }
    }

    return cnt;
};