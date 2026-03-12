/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = grid.length;
    const m = grid[0].length;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            const queue = [[r, c]];
            
            if (grid[r][c] === '1') {
                count++;
                
                while (queue.length > 0) {
                    const [x, y] = queue.shift();
                
                    for (let i = 0; i < 4; i++) {
                        const nx = x + dx[i];
                        const ny = y + dy[i];

                        if (nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny] === '1') {
                            grid[nx][ny] = 0;
                            queue.push([nx, ny]);
                        }
                    }
                }
            }
        }
    }

    return count;
};