/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // i = 0 -> 2 * 3 * 4
    // i = 1 -> 1 * 3 * 4
    // i = 2 -> 1 * 2 * 4
    // i = 3 -> 1 * 2 * 3
    const arr = Array(nums.length).fill(1);
    let left = 1;
    console.log(nums)
    // 2 * 1
    // 1 2 3 4
    // -> 1 2 2 2
    // -> 2 2 2 2
    // -> 
    for (let i = 0; i < nums.length; i++) {
        arr[i] *= left;
        left *= nums[i]
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] *= right;
        console.log(`right: ${right}`)
        right *= nums[i];
    }

    return arr;
};