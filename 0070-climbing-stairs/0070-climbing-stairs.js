/**
 * @param {number} n
 * @return {number}
 */


const climbStairs = function(n) {
    // 메모이제이션
    const memo = Array(n + 1).fill(-1);
    const result = dp(memo, n);
    return result;
};

// 재귀함수
function dp(memo, n) {
    // 기저조건
    if (n <= 1) return 1;
    // 이미 계산했으면 반환
    if (memo[n] !== -1) return memo[n];
    // n - 1 + n - 2
    memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
    return memo[n];
}