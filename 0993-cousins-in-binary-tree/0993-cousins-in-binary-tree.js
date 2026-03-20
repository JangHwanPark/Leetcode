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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // 이진 트리의 루트와 트리 내 두 서로 다른 노드의 값 x 및 y 가 주어졌을 때, 
    // 트리에서 값 x 와 y 에 해당하는 노드가 사촌 (cousins) 이면 true 를 반환하고, 
    // 그렇지 않으면 false 를 반환하세요.

    // 이진 트리에서 두 노드가 사촌이라는 것은 같은 깊이 (depth) 를 가지지만 
    // 부모가 다르다는 것을 의미합니다.

    // 참고로 이진 트리에서 루트 노드는 깊이 0 에 있으며, 
    // 각 깊이 k 노드의 자식은 깊이 k + 1 에 있습니다.
    let xd = -1;
    let yd = -1;
    let xp = null;
    let yp = null;

    function dfs(node, depth, parent) {
        if (!node) return false;

        if (node.val === x){
            xd = depth;
            xp = parent;
        }

        if (node.val === y){
            yd = depth;
            yp = parent;
        }
        
        dfs(node.left, depth+1, node);
        dfs(node.right, depth+1, node);
    }

    dfs(root, 0, null);
    return xd === yd && xp !== yp;
};