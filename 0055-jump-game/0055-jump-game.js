/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 0부터 시작
    // 현재 인덱스의 값은 이 위치에서 최대로 점프할 수 있는 길이
    // 0: 2 -> 1 또는 2로 이동 가능
    // nums[i] += nums[i + 1]이 nums[i] > nums.length보다 작으면 이동
    // 반복은 nums 배열만 순회
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }

    return true;
};