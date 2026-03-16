/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // 인접리스트로 변환
    const g = Array.from({length: n}, () => []);
    for (const [a,b] of edges) {
        g[a].push(b);
        g[b].push(a);
    }

    const v = Array(n).fill(false);
    let b = false;

    function dfs(node) {
        if (v[node]) return;
        v[node] = true;

        // 출발점과 도착점이 연결되어있지않다면
        // false 처리 후 return
        if (node === destination) {
            b = true;
            return;
        }

        for (const next of g[node]) {
            if (!v[next]) dfs(next);
        }
    }

    // 출발점: source
    // 도착점: destination
    dfs(source);
    return b;
};