/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // 시작점은 0번방
    // 0번방에서 n번방 열쇠를 받는다
    // n번방을 방문한다.
    // 반복...
    // 모든 방을 방문하면 true 반환
    // 
    const q = [0];
    const v = new Set([0]);
    while (q.length) {
        const n = q.shift();
        for (const next of rooms[n]) {
            console.log("next:", next)
            if (!v.has(next)) {
                v.add(next);
                q.push(next);
            }
        }
    }
    console.log(v.size, rooms.length)
    return v.size === rooms.length;
};