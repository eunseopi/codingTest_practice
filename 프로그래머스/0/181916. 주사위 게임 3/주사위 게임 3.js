function solution(a, b, c, d) {
    let count = new Map();
    
    // 주사위 값 등장 횟수 저장
    [a,b,c,d].forEach(num => count.set(num, (count.get(num) || 0) + 1));
    
    let keys = [...count.keys()] // 등장한 숫자들
    let values = [...count.values()] // 등장 횟수
    
    if (values.includes(4)) {
        return 1111 * keys[0]
    } else if (values.includes(3)) {
        let p = keys.find(k => count.get(k) === 3)
        let q = keys.find(k => count.get(k) === 1)
        return (10 * p + q) ** 2;
    } else if (values.includes(2) && values.length === 2) {
        let [p,q] = keys;
        return (p + q) * Math.abs(p - q);
    } else if (values.includes(2)) {
        let p = keys.find(k => count.get(k) === 2)
        let [q,r] = keys.filter(k => count.get(k) === 1)
        return q * r;
    } else {
        return Math.min(...keys);
    }
}