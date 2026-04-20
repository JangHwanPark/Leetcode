/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // chars 내 공통된 문자를 카운트하여 숫자료 표시해야한다.
    // 문자는 1개만 출력하고 문자 뒤 카운트를 출력한다
    // 반환값은 문자열의 길이

    let ptr1 = 0;
    let ptr2 = 0;

    // 1개라면 알파벳만 문자열에 담아야함
    // 2개이상일경우 문자열 + cnt
    // 그룹의 길이가 1이면 문자를 추가 
    // 그렇지 않으면 문자 뒤에 그룹의 길이 추가
    while (ptr1 < chars.length) {
        const current = chars[ptr1];
        const start = ptr1;

        while (ptr1 < chars.length && chars[ptr1] === current) {
            ptr1++;
        }

        const len = ptr1 - start;
        chars[ptr2] = current;
        ptr2 += 1;

        if (1 < len) {
            for (const str of len.toString()) {
                chars[ptr2] = str;
                ptr2 += 1;
            }
        }
    }

    return ptr2;
};