/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const dp = Array.from({length: rowIndex + 1}, () => Array(rowIndex + 1).fill(0));
    // dp[0][0] = 1;
    // dp[1][0] = 1, dp[1][1] = 1
    // dp[2][0] = 1
    // dp[2][1] = dp[1][0] + dp[1][1]
    // dp[2][2] = 1
    // ..
    // dp[3][1] = dp[2][0] + dp[2][1]
    // dp[3][2] = dp[2][1] + dp[2][2]
    if (rowIndex === 0) return [1]
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[1][1] = 1;

    for (let i = 2; i < rowIndex + 1; i++) {
        console.log("i:", i)
        dp[i][0] = 1;
        console.log(dp[i][0])
        console.log(dp[i][1])
        for (let j = 1; j < i + 1; j++) {
            console.log("j:",j)
            // dp[2][1] = dp[1][0] + dp[1][1]
            // dp[3][1] = dp[2][0] + dp[2][1]
            // i = 3
            //dp[i][j]
            // = dp[i - 1 = 3 - 1 = 2][j = 0] +
            // = dp[i - 1][j]
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
    }
    console.log(dp)
    return dp[rowIndex]
};