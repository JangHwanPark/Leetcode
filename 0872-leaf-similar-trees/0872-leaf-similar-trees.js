/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // 리프노드가 같다면 true를 반환하고 다르다면 false를 반환
    // root부터 순회 시작
    // 종료조건 = 현재 노드가 리프노드일경우 종료
    // 질문: 백트래킹을 해야할까 ?

    function dfs(node, arr) {
        // 예외처리 - 노드가 없다면 종료
        if (!node) return false;

        // 리프노드 종료시 종료
        if (!node.left && !node.right) {
            arr.push(node.val);
            return;
        }

        // 트리 순회(전위)
        dfs(node.left, arr)
        dfs(node.right, arr)
    }

    const tree1 = [];
    const tree2 = [];
    dfs(root1, tree1);
    dfs(root2, tree2);
    return tree1.join(',') === tree2.join(',');
};