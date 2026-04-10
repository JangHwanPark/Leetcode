/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // people 이라는 배열이 주어진다.
    // people[i] 는 i번째 사람의 몸무게다.
    // 그리고 보트는 무한히 많이 있고 각 보트는 최대 limit 무게까지 실을 수 있다.
    // 각 보트는 동시에 최대 두 사람까지만 태울 수 있고
    // 그 두 사람의 몸무게 합이 limit 이하여야 한다.

    // 배에 탈수있는 사람 수는 limit 만큼 탈수있음
        // 요소별로 제한을 넘지않으면 바로 태운다.
        // i를 태우고 2사람을 태울수있다면? 더 태운다.
            // limit에서 사람몸무게를 빼면 최대로 태울수있음
    // 반환: 필요한 보트 갯수
    let left = 0;
    let right = people.length - 1;
    let cnt = 0;

    people.sort((a, b) => a - b);

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }

        cnt++;
    }

    return cnt;
    // limit = 3
    // 사람1 => 몸무게 1이니까 타셈 -> limit = 2
    // 사람2 => 몸무게 2니까 타셈 -> limit = 0

    // limit = 5
    // 사람1 => 몸무게 3이니까 타셈 -> limit = 2
    // 사람2 => 몸무게 3이니까 다른배 가져옴 -> limit = 2
    // 사람3 => 몸무게 4이니까 다른배 가져옴 -> limit = 1
    // 사람4 => 몸무게 5이니까 다른배 가져옴 -> limit = 0
    
    // 초기 제한값 따로 저장
    // 배열 왼쪽부터 오른쪽까지 순회
    // let limitTemp = limit;
    // let cnt = 0;

    // for (let i = 0; i < people.length; i++) {
        // 제한값에서 사람수를 뺐을때 카운트 증가
        // if (limitTemp <= people[i]) cnt++;
        // limit이 0이거나 사람수보다 작으면 limit으로 다시 초기화
        // if (limitTemp === 0 || limitTemp < people[i]) limitTemp = limit;
    // }
};