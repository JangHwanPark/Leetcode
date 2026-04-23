/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    // 상하좌우
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    // 방문 배열 & 방문처리
    const n = maze.length;
    const m = maze[0].length;
    const visited = Array.from({length:n},()=>Array(m).fill(false));
    visited[entrance[0]][entrance[1]] = true;

    // 시작위치 entrance
    const queue = [[...entrance, 0]];
    console.log("queue:", queue);

    // 탐색 시작
    while (queue.length) {
        const [x, y, dist] = queue.shift();
        console.log("x, y:",x,y, dist)
        
        for (let i = 0; i < 4; i++) {
            // . 위치만 이동 가능
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (maze[nx][ny] === "+") continue;
            if (visited[nx][ny]) continue;

            queue.push([nx, ny, dist + 1]);
            visited[nx][ny] = true;

            if (nx === 0 || ny === 0 || nx === n - 1 || ny === m - 1) {
                return dist + 1;
            }
        }
    }
    
    return -1;
};