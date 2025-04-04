function solution(n, s) {
    if (s < n) return [-1]; // 최소 1씩 n개 있어야 하니까 불가능

    const base = Math.floor(s / n);
    const remainder = s % n;

    const result = new Array(n).fill(base);

    for (let i = n - 1; i >= n - remainder; i--) {
        result[i]++;
    }

    return result;
}
