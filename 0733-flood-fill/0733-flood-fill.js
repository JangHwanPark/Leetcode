/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const visited = Array.from({length: image.length}, () => Array(image[0].length).fill(false));
    const st = image[sr][sc];
    const queue = [[sr,sc]];
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    visited[sr][sc] = true;
    image[sr][sc] = color;
    

    while (queue.length > 0) {
        const [x,y] = queue.shift();

        // 인접한 픽섹 확인 = 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (visited[nx][ny]) continue;
            if (image[nx][ny] !== st) continue;
            visited[nx][ny] = true;
            image[nx][ny] = color;
            queue.push([nx, ny])
        }
    }
    console.log(visited)
    // 연산한 이미지 반환
    return image;
};