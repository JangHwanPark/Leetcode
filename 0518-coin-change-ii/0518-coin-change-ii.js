/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const c of coins) {
        for (let i = c; i < amount+1; i++) {
            dp[i] = dp[i] + dp[i - c];
        }
    }

    return dp[amount]
};