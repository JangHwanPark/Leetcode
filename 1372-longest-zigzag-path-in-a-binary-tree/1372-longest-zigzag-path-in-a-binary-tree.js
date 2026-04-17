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
    function dfs(node, dict, len) {
        // 종료
        if (!node) return;

        // 길이 갱신
        max = Math.max(max, len);

        // 자식호출
        if (dict === "left") {
            // 현재 방향이 왼쪽이라면
            // 같은방향노드 탐색
            // 길이는 동일함 - 하위노드가 지그재그일수도 있기때문
            dfs(node.left, 'left', 1);

            // 반대 방향 노드 탐색
            // 지그재그이므로 길이 증가
            dfs(node.right, 'right', len + 1);
        } else {
            // 현재 방향이 오른쪽 이라면
            // 같은 방향 노드
            dfs(node.right, 'right', 1);

            // 반대 방향 노드
            // 지그재그이므로 길이 증가
            dfs(node.left, 'left', len + 1);
        }
    }

    let max = 0;
    dfs(root, 'left', 0);
    dfs(root, 'right', 0);
    return max;
};