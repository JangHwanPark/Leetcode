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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    
    while (queue.length > 0) {
        let max_level_val = -Infinity;
        const level = queue.length;
        
        for (let i = 0; i < level; i++){
            const node = queue.shift();
            max_level_val = Math.max(max_level_val, node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        result.push(max_level_val);
    }

    return result;
}