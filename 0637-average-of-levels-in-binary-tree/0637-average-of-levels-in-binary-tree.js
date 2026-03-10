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
var averageOfLevels = function(root) {
    if (!root) return [];

    const result = [];
    // 큐 초기화 (초기값 = 노드, 레벨)
    const queue = [root];

    while (queue.length > 0) {
        const queueSize = queue.length;
        let sum = 0;
        // console.log("queueSize:", queueSize)
        
        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift();
            sum += node.val;
            // console.log("sum:", sum);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        
        // console.log("sum loop end:", sum);
        // console.log((sum / queueSize).toFixed(5))
        result.push(Number((sum / queueSize).toFixed(5)))
    }

    return result;
};