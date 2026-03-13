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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [root];
    const res = [];
    console.log(queue);

    while (queue.length > 0) {
        const level = queue.length;
        const levelTemp = [];
        console.log(level)
        for (let i = 0; i < level; i++) {
            const node = queue.shift();
            levelTemp.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        res.push(levelTemp)
    }
    console.log(res)
    return res;
};