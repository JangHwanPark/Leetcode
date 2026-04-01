/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const state = Array(numCourses).fill(0);
    const graph = Array.from({length: numCourses}, () => []);
    for (const [a, b] of prerequisites) {
        graph[b].push(a)
    }

    function dfs(node) {
        if (state[node] === 1) return false;
        if (state[node] === 2) return true;
        state[node] = 1;

        for (const next of graph[node]) {
            if (!dfs(next)) return false;
        }

        state[node] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};