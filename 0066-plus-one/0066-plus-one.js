/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 정수 배열 `digits` 로 표현된 큰 정수가 주어집니다.
    // 여기서 `digits[i]` 는 정수의 i 번째 숫자입니다.
    // 숫자는 왼쪽에서 오른쪽 순서대로 최상위 자리수부터
    // 최하위 자리수까지 정렬되어 있습니다.
    // 큰 정수에는 선행 0 이 포함되지 않습니다.
    // 큰 정수에 1 을 더하고 결과 숫자 배열을 반환하세요.
    const len = digits.length - 1;
    const add = digits[len] + 1;
    
    if (add < 10) {
        digits[len] = add;
        return digits;
    } else {
        let c = 1;
        console.log('else:', digits);
        for (let i = len; i >= 0; i--) {
            const sum = digits[i] + c;
            console.log("sum:", sum)
            console.log("digits[i]:",digits[i])
            if (sum < 10) {
                digits[i] = sum;
                console.log("digits:", digits);
                return digits;
            } 
            digits[i] = 0;
        }
        digits.unshift(1);
        return digits;
    }
};