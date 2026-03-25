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
var sumOfLeftLeaves = function(root) {
    const q = [root];
    let s = 0;

    while (q.length > 0) {
        const l = q.length;
        for (let i = 0; i < l; i++) {
            const n = q.shift();
            // 왼쪽자식 없고 왼쪽 자식이 리프노드
            if (n.left && n.left.left === null && n.left.right === null) {
                s += n.left.val;
            }

            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
    console.log("s:",s)
    return s;
};