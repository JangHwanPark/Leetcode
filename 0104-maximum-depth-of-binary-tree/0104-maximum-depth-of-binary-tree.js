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
    if (!root) return 0;

    const queue = [[root, 1]];
    let max_depth = 0;

    while (queue.length) {
        const [node, depth] = queue.shift();
        // console.log("depth" + depth);
        // console.log("node: " + JSON.stringify(node, null, 2));
        // console.log("node.val: " + node.val);
        max_depth = Math.max(max_depth, depth);

        if (node.left) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
    }

    // console.log(max_depth);
    return max_depth;
};

console.log(maxDepth);