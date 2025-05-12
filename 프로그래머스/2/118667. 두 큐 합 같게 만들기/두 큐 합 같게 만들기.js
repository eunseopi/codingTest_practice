function solution(queue1, queue2) {
    const n = queue1.length;
    const total = [...queue1, ...queue2];
    
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    const target = (sum1 + sum2) / 2;

    if ((sum1 + sum2) % 2 !== 0) return -1;

    let i = 0; // queue1 포인터
    let j = n; // queue2 포인터
    let count = 0;

    while (count <= n * 3) {
        if (sum1 === target) return count;
        if (sum1 > target) {
            sum1 -= total[i];
            sum2 += total[i];
            i++;
        } else {
            sum1 += total[j];
            sum2 -= total[j];
            j++;
        }
        count++;
    }

    return -1;
}
