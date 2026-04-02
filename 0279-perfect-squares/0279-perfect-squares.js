/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const a = [];
    for (let i = 1; i * i <= n; i++) {
        a.push(i * i);
    }

    console.log(a)
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (const v of a) {
        for (let i = v; i <= n; i++) {
            dp[i] = Math.min(dp[i], dp[i - v] + 1);
        }
    }
    console.log(dp)
    return dp[n]
};