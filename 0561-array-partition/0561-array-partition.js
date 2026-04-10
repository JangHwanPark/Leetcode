/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // 2n개의 정수로 이루어진 배열 nums가 주어졌을 때,
    // 이 정수들을 (a1, b1), (a2, b2), ..., (a1, b2)와 같은
    // n개의 쌍으로 묶어 모든 i에 대해 min(a1, b2)의 합이 
    // 최대가 되도록 합니다. 최대화된 합을 반환합니다.

    // 변수
    // 최소값의 합을 저장할 변수 minSum
    // nums 배열을 왼쪽부터 끝까지 순회
    // 배열의 요소를 2개씩 묶어야함
    // -> slice를 사용해도 될거같음..
    // -> 완탐이라면 다 돌아보겠다만..
    // 반환: minSum
    console.log(nums)
    let min = 0;
    nums.sort((a, b) => a - b);
    console.log(nums)
    for (let i = 0; i < nums.length; i += 2) {
        min += nums[i]
    }
    console.log(min)
    return min;
};