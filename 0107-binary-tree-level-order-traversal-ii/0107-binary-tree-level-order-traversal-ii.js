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
var levelOrderBottom = function(root) {
    if (!root) return [];
    const queue = [root];
    console.log(queue)
    const result = [];

    while (queue.length > 0) {
        const level = [];
        
        // 레벨 계산
        const queueSize = queue.length;
        console.log(queueSize)

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.unshift(level);
    }

    return result;
};