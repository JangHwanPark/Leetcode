/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // 초기화
    const m = board.length;
    const n = board[0].length;
    const bv = Array.from({length: m},()=>Array(n).fill(false));

    // bfs 실행
    function bfs(q, v) {
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];

        while(q.length > 0) {
            const [x,y]=q.shift();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (v[nx][ny]) continue;
                if (board[nx][ny] !== 'O') continue;
                q.push([nx,ny]);
                v[nx][ny] = true;
            }
        }
    }
    
    // 경계 계산
    const bq = [];
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            bv[i][0] = true;
            bq.push([i, 0]);
        }
        
        if (board[i][n - 1] === 'O') {
            bv[i][n-1] = true;
            bq.push([i, n-1]);
        }
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            bv[0][j] = true;
            bq.push([0,j]);
        }

        if (board[m-1][j] === 'O') {
            bv[m-1][j] = true;
            bq.push([m-1,j]);
        }
    }

    // 시작점
    console.log(bv)
    console.log(bq)
    bfs(bq,bv);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 값이 O고 경계에 있는게 아니라면 실행
            if (board[i][j] === 'O' && !bv[i][j]) {
                board[i][j] = 'X';
            }
        }
    }

    console.log(board)
    return board;
};