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
var maxLevelSum = function(root) {
    // 반환: node.val이 최대값인 레벨 반환
    // - left level + right level
    // - 크기 비교

    // bfs -> 큐에 넣고 빼기
    // 탐색: root에서 시작
    const q = [root];

    // 외부변수: maxLevel
    // 초기화는 -Infinity: 범위가 -10^5 ~ 10^5라
    let maxSum = -Infinity;
    let resLevel = 1;
    let currentLevel = 1;

    while (q.length) {
        const size = q.length;
        let sum = 0;

        // 레벨 순회 (큐에 값이 없을때까지 뱅글뱅글 돌아야함)
        for (let i = 0; i < size; i++) {
            // 큐에서 값을 순서대로 뺌
            const node = q.shift();
            // console.log(node)
            // 레벨별 node.val을 다 더함(변수 sum 사용)
            sum += node.val;
            
            // 큐에 다음노드 추가
            // ㄴ 레벨추가니까 left, right 큐에 넣어야함
            // ㄴ 노드가 없다면 null이 들어가니까 null체크해야함
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        // 최대값 갱신
        if (maxSum < sum) {
            maxSum = sum;
            resLevel = currentLevel;
        }

        // 트리레벨 증가
        currentLevel++;
    }

    // 반환: resLevel
    return resLevel;
};