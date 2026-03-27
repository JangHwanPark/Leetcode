/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    console.log(nums)
    const dp = Array(nums.length+1).fill(0);
    dp[1] = nums[0];
    dp[2] = Math.max(nums[0],nums[1]);

    for (let i = 2; i < nums.length + 1; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-1]);
    }

    console.log(dp)
    return dp[nums.length]
};