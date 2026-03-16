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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let s = 0;
    let b = false;
    console.log(root)
    console.log(targetSum, s)
    // 시작값과 targetSum이 같다면 종료
    // if (targetSum === s) return false;

    // dfs 시작
    function dfs(node, s) {
        if (node === null) return false;

        // s값 초기화
        s += node.val;
        console.log("node.val:",node.val);
        console.log("s:",s)

        if (node.left) {
            dfs(node.left, s);
        }

        if (node.right) {
            dfs(node.right, s);
        }

        if (!node.left && !node.right && s === targetSum) {
            b = true;
            return;
        }
    }

    dfs(root, s);
    // 반환 조건 targetSum === 모든 경로의 노드 합
    // return = true || false
    return b;
};