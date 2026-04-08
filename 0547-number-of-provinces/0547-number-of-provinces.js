/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let connect = 0;

    function dfs(i) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !visited[j]) {
                visited[j] = true;
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i);
            connect++;
        }
    }

    return connect;
};