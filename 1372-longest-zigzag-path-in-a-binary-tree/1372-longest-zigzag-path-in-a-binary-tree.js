/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    // 0부터 시작해서 지그재그로 탐색하여 개수 -1을 반환해야함
    // 탐색 - 방향 전환을 어떻게 해야하는가?
    // node.left 이후 node.right 호출해야함
    // node.right 이후 node.left 호출해야함
    // - 조건문으로 현재노드가 left라면 right 호출
    //  - 현재 노드가 left라는걸 어케 파악하는가?
    // 백트래킹해야하나..
    // 전체 최대값 갱신
    function dfs(node, dir, len) {
        // 종료조건 - 마지막 노드라면 종료
        if (!node) return;
        max = Math.max(max, len);

        // 방향 전환 - 지그재그 호출
        if (dir === "L") {
            // dir가 왼쪽이라면 오른쪽 노드 탐색
            dfs(node.right, "R", len + 1);
            dfs(node.left, "L", 1);
        } else {
            // dir가 오른쪽이라면 왼쪽 노드 탐색
            dfs(node.left, "L", len + 1);
            dfs(node.right, "R", 1);
        }
    }

    let max = 0;
    if (!root) return 0;
    dfs(root.right, "R", 1);
    dfs(root.left, "L", 1);
    return max;
};