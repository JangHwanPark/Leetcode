/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 1 = 2 * 3 * 4
    // 2 = 1 * 3 * 4
    // 3 = 1 * 2 * 4
    // 4 = 1 * 2 * 3
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 1;
    //     for (let j = 0; j <nums.length; j++) {
    //         sum *= nums[j];
    //         arr.push(sum);
    //     }
    // }
    const arr = [];
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        arr.push(left);
        left *= nums[i];
    }
    console.log(arr)

    let right = 1;
    for (let i = nums.length - 1; 0 <= i; i--) {
        arr[i] *= right;
        right *= nums[i];
    }

    console.log(arr)
    return arr;
};