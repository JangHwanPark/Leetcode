/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const start = image[sr][sc];

    // 4방향 범위 설정
    const dx = [-1, 1, 0,0];
    const dy = [0,0,-1,1];

    // 원래색과 바꿀색이 없으면 종료
    // 원래색 = start;
    // 바꿀색 = color?
    // if (start !== color) return;
    if (start === color) return image;

    // 범위체크는 항상 행 열 갯수로
    const r = image.length;
    const c = image[0].length;

    function dfs(sr, sc) {
        image[sr][sc] = color;

        // sc sr 부터 플러드필 진행
        for (let i = 0; i < 4; i++) {
            const nx = sr + dx[i];
            const ny = sc + dy[i];
            console.log("nx, ny:", nx, ny, "| dx dy:", dx[i], dy[i]);

            // 범위 체크
            if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
                continue;
            }

            // 현재칸이 원래색이 아니면 종료
            if (image[nx][ny] !== start) {
                continue;
            }

            dfs(nx, ny);
        }
    }

    dfs(sr, sc);
    return image;
};