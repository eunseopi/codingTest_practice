function solution(maps) {
    const n = maps.length;       // 세로 (행)
    const m = maps[0].length;    // 가로 (열)

    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const queue = [];
    queue.push([0, 0, 1]);
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === m - 1 && y === n - 1) {
            return distance;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && nx < m &&
                ny >= 0 && ny < n &&
                maps[ny][nx] === 1 &&
                !visited[ny][nx]
            ) {
                visited[ny][nx] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }

    return -1;
}
