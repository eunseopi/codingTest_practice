function solution(s) {
    let count = 0;
    for (const ch of s) {
        if (ch === '(') count++;
        else {
            if (count === 0) return false;
            count--;
        }
    }
    return count === 0;
}
