function getBigrams(str) {
    const result = [];
    str = str.toUpperCase();

    for (let i = 0; i < str.length - 1; i++) {
        const a = str[i];
        const b = str[i + 1];

        // 정규식 없이 알파벳 2글자인지 확인
        if (
            a >= 'A' && a <= 'Z' &&
            b >= 'A' && b <= 'Z'
        ) {
            result.push(a + b);
        }
    }

    return result;
}

function solution(str1, str2) {
    const a = getBigrams(str1);
    const b = getBigrams(str2);

    const mapA = new Map();
    const mapB = new Map();

    for (const word of a) {
        mapA.set(word, (mapA.get(word) || 0) + 1);
    }

    for (const word of b) {
        mapB.set(word, (mapB.get(word) || 0) + 1);
    }

    let inter = 0;
    let union = 0;

    const allKeys = new Set([...mapA.keys(), ...mapB.keys()]);

    for (const key of allKeys) {
        const countA = mapA.get(key) || 0;
        const countB = mapB.get(key) || 0;

        inter += Math.min(countA, countB);
        union += Math.max(countA, countB);
    }

    if (union === 0) return 65536;

    return Math.floor((inter / union) * 65536);
}
