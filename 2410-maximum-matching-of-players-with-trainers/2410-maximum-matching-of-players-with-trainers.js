/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    const p = players.sort((a,b)=>a-b);
    const t = trainers.sort((a,b)=>a-b);
    let cnt = 0;
    let i = 0;
    let j = 0;

    while (i < players.length && j < trainers.length) {
        // 플레이어 실력이 트레이너 능력 이하인경우
        if (p[i] <= t[j]) {
            cnt++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    return cnt;
};