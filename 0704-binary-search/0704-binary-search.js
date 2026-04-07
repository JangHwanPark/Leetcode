/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //const sorted = nums.sort((a, b) => a - b);
    console.log(nums, target);
    let l = 0;
    let r = nums.length - 1;
    console.log(l, r)

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        console.log(nums[mid])
        if (nums[mid] === target) {
            return mid;
        }

        else if (nums[mid] < target) {
            l = mid + 1;
        }

        else {
            r = mid - 1
        }
    }

    return -1;
};