/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = Array.from({length: numRows},()=> Array(numRows).fill(0));
    console.log(dp)
    const res = [[1]];
    if (numRows === 1) return res;
    res.push([1,1]);
    if (numRows === 2) return res;
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[1][1] = 1;

    for (let i = 2; i < numRows; i++) {
        dp[i][0] = 1;
        dp[i][i] = 1;
        for (let j = 1; j < i; j++) {
            console.log("i:",i, "i+1:",i-1, "j:", j, "j - 1:",j-1)
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
        console.log("dp[i]:",dp[i])
        res.push(dp[i].slice(0, i + 1));
    }
    return res;
};