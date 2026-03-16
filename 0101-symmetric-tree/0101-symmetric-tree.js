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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 이진 트리의 루트가 주어졌을 때,
    // 해당 루트 중심을 기준으로 대칭인지(즉, 자기 자신과 대칭인지) 확인.
    if (!root) return true;

    function dfs(l, r) {
        if (!l && !r) return true;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;
        return dfs(l.left, r.right) && dfs(l.right, r.left);
    }

    return dfs(root.left, root.right);
};