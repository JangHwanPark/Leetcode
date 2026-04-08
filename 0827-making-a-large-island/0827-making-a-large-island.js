/**
 * @param {number[][]} grid
 * @return {number}
 */
 // 1 0
 // 0 1
var largestIsland = function(grid) {
    const n = grid.length;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const sizeMap = new Map();
    let iid = 2;
    let res = 0;

    // 섬크기 계산 및 반환
    function dfs(x, y, id) {
        if (x < 0 || y < 0 || x >= n || y >= n) return 0;
        if (grid[x][y] !== 1) return 0;
        
        grid[x][y] = id;
        let size = 1;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            size += dfs(nx, ny, id);
        }

        return size;
    }

    // 시작지점 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 1을 만나면 이 위치에서 dfs 시작
            if (grid[i][j] === 1) {
                const size = dfs(i, j, iid);
                sizeMap.set(iid, size);
                res = Math.max(res, size);
                iid++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let sum = 1;
                const set = new Set();

                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    
                    if (nx < 0|| ny<0|| nx >= n|| ny >= n) continue;
                    
                    const id = grid[nx][ny];
                    if (id > 1 && !set.has(id)) {
                        sum+= sizeMap.get(id);
                        set.add(id);
                    }
                }

                res = Math.max(res, sum);
            }
        }
    }

    return res;
};