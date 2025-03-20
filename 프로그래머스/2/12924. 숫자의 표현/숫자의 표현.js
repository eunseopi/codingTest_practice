function solution(n) {
    let count = 0;
    
    // k는 연속된 자연수의 개수 (k는 1부터 시작해서 n까지 탐색)
    for(let k = 1; k * (k - 1) / 2 < n; k++){
        //start가 자연수인지 확인
        if((n - (k * (k-1)) / 2) % k === 0){
            count++;
            }
    }
    
    return count;
}