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
var goodNodes = function(root) {
    // 초기 X값: root.val
    // X가 좋다: 루트에서 X 까지의 경로에 X 보다 큰 값을 가진 노드가 없는 경우
    // return: X가 좋은 노드의 수
    let cnt = 0;
    // 트리 순회하면서 root 보다 크다면 카운트 증가
    function dfs(node, curr) {
        // 종료조건
        if (!node) return cnt;

        // 노드 비교
        if (curr <= node.val) {
            cnt++;
        }

        // 다음 노드 순회
        const maxVal = Math.max(curr, node.val);
        dfs(node.left, maxVal);
        dfs(node.right, maxVal);
    }
    dfs(root, root.val);
    return cnt;
};