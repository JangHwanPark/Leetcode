/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const idx = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in idx) {
            return [i, idx[target - num]];
        }
        idx[num] = i;
    }
}; 