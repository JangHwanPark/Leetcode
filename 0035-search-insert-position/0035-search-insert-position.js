/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 초기화
    let start = 0;
    let end = nums.length - 1;

    // 이진탐색
    function binary(arr, st, ed) {
        while (st <= ed) {
            const mid = Math.floor((st + ed) / 2);
            if (arr[mid] === target) return mid;
            else if (arr[mid] < target) st = mid + 1;
            else ed = mid - 1;
        }
    }
    
    const res = binary(nums, start, end);

    if (res === undefined) {
        nums.push(target)
        nums.sort((a, b) => a - b);
        let start2 = 0;
        let end2 = nums.length - 1;
        return binary(nums, start2, end2);
    }
    
    return res;
};