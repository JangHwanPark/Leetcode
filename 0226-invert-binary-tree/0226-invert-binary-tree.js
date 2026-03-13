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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    const queue = [root];
    const result = [];
    console.log(root)
    console.log(queue)

    while (queue.length > 0) {
        const level = queue.length;
    
        for (let i = 0; i < level; i++) {
            const node = queue.shift();
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            
            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        console.log(root)
    }

    return root;
};