/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    console.log(grid)
    
    const n = grid.length;
    const m = grid[0].length;
    let cnt = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
           if (grid[r][c] !== 1) continue;

            for (let d = 0; d < 4; d++) {
                const nx = r + dx[d];
                const ny = c + dy[d];
                console.log(nx, ny)

                if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                    cnt++;
                    continue;
                }

                if (grid[nx][ny] === 0) {
                    cnt++;
                }
           }
        }
    }

    console.log(cnt)
    return cnt;
};