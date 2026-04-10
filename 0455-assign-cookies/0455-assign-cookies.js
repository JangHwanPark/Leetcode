/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 현재를 만족했을때 종료시키는게 그리디니까
    // 앞에서부터 쿠키를주고 더 못주면 종료시키면 될듯
        // 최대한 많은 아이에게 쿠키를 줘야하니까
        // 배열 정렬해서 앞에서부터 순서대로줌

    // 만족시킨 아이의 수(카운터 변수)
    // 반복: 배열크기가 서로 다르고 동시에 돌리려면 while 써야함
    // 반복 조건: i가 g길이까지, j가 s길이까지
    // 조건: g[i]에게 s[j] 쿠키를 줄수있는가?
        // 줄수있다면 cnt, i, j증가
        // 줄수없다면 cnt 반환시키고 종료
    let cnt = 0;
    let i = 0;
    let j = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            i++;
            j++;
            cnt++;
        } else {
            j++;
        }
    }

    return cnt;
};