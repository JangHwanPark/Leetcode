/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // costs 왼쪽에서 오른쪽으로 순회
    // arr = costs[i][0] - costs[i][1] 저장
    // 정렬 오름차순
    // left는 A로 보내고, right는 B로 보냄
    let sum = 0;
    const n = costs.length / 2;

    costs.sort((a,b)=>{
        return (a[0] - a[1]) - (b[0] - b[1]);
    });

    for (let i = 0; i < n; i++) {
        sum += costs[i][0]
    }

    for (let i = n; i < costs.length; i++) {
        sum += costs[i][1];
    }

    return sum;
};