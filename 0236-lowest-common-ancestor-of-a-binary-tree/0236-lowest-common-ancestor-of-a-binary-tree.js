/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 반환하는것 q와 p의 LCA -> node
    // 자식 노드가 반환해야하는것 -> node
    function dfs(node, q, p) {
        if (!node) return null;
        if (node === p || node === q) return node;
        const left = dfs(node.left, p, q);
        const right = dfs(node.right, p, q);

        if (!left && !right) return null;
        else if (left && !right) return left;
        else if (!left && right) return right;
        else return node;
    };

    return dfs(root, q, p);
};