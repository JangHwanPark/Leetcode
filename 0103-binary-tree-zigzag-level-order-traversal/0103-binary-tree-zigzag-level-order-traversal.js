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
var zigzagLevelOrder = function(root) {
    const res = [];

    // queue = 3
    const queue = [root];
    let direct = 'L';
    
    if (!root) return [];

    while (queue.length) {
        // 3 -> 20, 9 -> 15, 7
        const level = [];
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);

            // 지그재그 탐색
            // 오 -> 왼
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (direct === "R") level.reverse();
        res.push(level);
        direct = direct === 'L' ? 'R' : 'L';
    }

    return res;
};