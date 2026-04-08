/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    console.log(node)
    // 입력형태: 노드
    // 출력: 복사된 그래프에대한 참조

    // null처리(그래프 비어있을때)
    if (!node) return null;

    // 방문 노드 생성
    // 결과맵 생성
    const v = new Map();
    
    // dfs 함수 생성
    // 노드순회
    // 방문하지 않았다면
    // 다음노드를 결과배열에 저장
    function dfs(n) {
        if (v.has(n)) return v.get(n);
        
        const clone = new _Node(n.val);
        v.set(n, clone);
        
        for (const next of n.neighbors) {
            clone.neighbors.push(dfs(next));    
        }

        return clone;
    }

    return dfs(node);
};