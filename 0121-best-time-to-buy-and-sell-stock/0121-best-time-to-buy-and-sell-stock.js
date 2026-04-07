/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = Array(prices.length).fill(0);
    let min = prices[0];
    console.log(dp, min)
    // 현재 저장된 값보다 큰 경우에만 판매
    // if dp[i] < prices[i]

    // 오늘값에서 전에 구매한 주식 판매한 대금, 현재 주식 가격
    // dp[i] = Math.max(dp[i] - dp[i - 1], prices[i]);
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i - 1]);
        console.log(min)
        dp[i] = Math.max(dp[i - 1], prices[i] - min)
    }

    console.log(dp)
    const res = Math.max(...dp);
    return res === 0 ? 0 : res;
};