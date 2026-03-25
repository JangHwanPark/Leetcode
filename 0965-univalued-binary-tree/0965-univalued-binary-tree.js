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
var isUnivalTree = function(root) {
    const val = root;
    const q = [root];
    console.log("val:", val.val);
    while (q.length > 0) {
        const l = q.length;

        for (let i = 0; i < l; i++) {
            const n = q.shift();
            if (val.val !== n.val) return false;
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
    return true;
};