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
var maxDepth = function(root) {
    // 주어진 트리의 최대 깊이를 구하는 문제
    // 1.인자로 깊이를 같이 넘기면됨
    // 2.깊이 카운트를 max로 관리
    let level = 0;

    // 트리 순회
    function dfs(node, val) {
        // 종료조건
        if (!node) return val;

        // 다음 레벨 탐색
        const left = dfs(node.left, val + 1);
        const right = dfs(node.right, val + 1);
        level = Math.max(left, right);
        return level;
    }

    dfs(root, level);

    // 레벨 반환
    return level;
};