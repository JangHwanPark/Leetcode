/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pg = Array.from({length:m},()=>Array(n).fill(false));
    const ag = Array.from({length:m},()=>Array(n).fill(false));

    function bfs(q, v) {
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];

        while (q.length > 0) {
            const [x, y] = q.shift();
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (v[nx][ny]) continue;
                if (heights[nx][ny] < heights[x][y]) continue;
                v[nx][ny] = true;
                q.push([nx, ny]);
            }
        }
    }

    const pq = [];
    for (let i = 0; i < m; i++) {
        pg[i][0]=true;
        pq.push([i,0]);
    }
    for (let j = 0; j < n; j++) {
        pg[0][j]=true;
        pq.push([0,j]);
    }
    bfs(pq, pg);

    const aq = [];
    for (let i = 0; i < m; i++) {
        ag[i][n-1]=true;
        aq.push([i,n-1]);
    }
    for (let j = 0; j < n; j++) {
        ag[m-1][j]=true;
        aq.push([m-1,j]);
    }
    bfs(aq, ag);
    console.log(pq, aq)
    console.log(pg, ag)
    const res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (ag[i][j] && pg[i][j]) {
                res.push([i,j])
            }
        }
    }
    console.log(res)
    return res;
};