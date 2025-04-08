function solution(video_len, pos, op_start, op_end, commands) {
    const videoLimit = timeToMinutes(video_len);
    let time = timeToMinutes(pos);

    const opStart = timeToMinutes(op_start);
    const opEnd = timeToMinutes(op_end);

    for (let i = 0; i < commands.length; i++) {
        // 오프닝 구간 먼저 체크
        if (time >= opStart && time <= opEnd) {
            time = opEnd;
        }

        if (commands[i] === "next") {
            time = Math.min(videoLimit, time + 10);
        } else if (commands[i] === "prev") {
            time = Math.max(0, time - 10);
        }
    }

    // 마지막에 오프닝 체크 한 번 더 (명령 후 바로 들어갈 수 있음)
    if (time >= opStart && time <= opEnd) {
        time = opEnd;
    }

    const mm = String(Math.floor(time / 60)).padStart(2, '0');
    const ss = String(time % 60).padStart(2, '0');
    return `${mm}:${ss}`;
}

function timeToMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}
