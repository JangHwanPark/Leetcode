/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a,b) => a - b);
    function subset(start, current) {
        res.push([...current]);
        for (let i = start; i < nums.length; i++) {
            if (start < i && nums[i] === nums[i - 1]) continue;
            current.push(nums[i]);
            subset(i + 1, current);
            current.pop();
        }
    }

    subset(0, []);
    return res;
};