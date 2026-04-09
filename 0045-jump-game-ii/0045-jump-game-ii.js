/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 최소 점프 횟수 구하기
    let cnt = 0, min = 0, end = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        if (nums.length <= 1) return 0;
        const tmp = i + nums[i];
        min = Math.max(min, tmp);

        if (i === end) {
            cnt++;
            end = min;
        }

        if (end >= nums.length - 1) {
            return cnt;
        }
    }
};