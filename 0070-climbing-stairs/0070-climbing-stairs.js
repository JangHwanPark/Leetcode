/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(n + 1).fill(0);
    
    // n이 작은 경우 예외처리
    if (n === 1) return 1;
    if (n === 2) return 2;
  
    // dp 초기화
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n]
};