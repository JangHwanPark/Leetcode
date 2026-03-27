/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    console.log(cost)
    // 상태 저장 변수
    const dp = Array(cost.length + 1).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i < cost.length + 1; i++) {
        const min = Math.min(dp[i-1] + cost[i-1], dp[i - 2] + cost[i - 2]);
        dp[i] = min;
    }

    console.log(dp)
    return dp[cost.length]
};