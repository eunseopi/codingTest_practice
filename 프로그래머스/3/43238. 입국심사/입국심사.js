function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n; // 최악의 경우 가장 오래걸리는 심사관이 함.
    
    let answer = right;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
         
        const total = times.reduce((acc, time) => acc + Math.floor(mid/time), 0);

        if(total >= n) {
            answer = mid;
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    
    return answer;
}