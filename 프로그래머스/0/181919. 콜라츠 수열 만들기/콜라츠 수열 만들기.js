// 재귀 함수
// function solution(n) {
//     if (n === 1) return [1];
    
//     let next = n % 2 === 0 ? n / 2 : 3 * n + 1;
//     return [n, ...solution(next)];
// }

function solution(n) {
    let res = [];
    while(n !== 1) {
        res.push(n);
        n = n % 2 === 0 ? n /2 : 3 * n + 1;
    }
    res.push(1);
    return res;
}