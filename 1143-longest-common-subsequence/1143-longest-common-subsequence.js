/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const t1 = text1.length + 1;
    const t2 = text2.length + 1;
    const dp = Array.from({length: t1}, () => Array(t2).fill(0));

    for (let i = 1; i < t1; i++) {
        for (let j = 1; j < t2; j++) {
            dp[i][0] = 0;
            dp[0][j] = 0;

            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[t1 - 1][t2 - 1];
};