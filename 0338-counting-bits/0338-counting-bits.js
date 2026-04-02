/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        dp[i] = dp[i >> 1] + (i % 2);
    }

    return dp;
};