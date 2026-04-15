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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    // 깊이를 탐색하면서 root.val + next.val = targetSum이라면
    // 카운트를 증가시키고 경로를 반환한다.
    // 제약조건 - 부모 -> 자식노드로만 이동 가능함
    function dfs(node, sum) {
        // 종료조건
        if (!node) return;

        // 현재 노드와 다음노드 합 구하기
        sum += node.val;

        if (sum === targetSum) cnt++;

        // 자식노드 탐색
        dfs(node.left, sum);
        dfs(node.right, sum);
    }

    function traverse(node) {
        if (!node) return;
        dfs(node, 0);
        traverse(node.left);
        traverse(node.right);
    }
    
    let cnt = 0;
    traverse(root);
    
    // 반환
    return cnt;
};