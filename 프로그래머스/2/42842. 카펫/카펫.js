function solution(brown, yellow) {
    let sumSize = brown + yellow;
    for(let i = 1; i <= Math.sqrt(sumSize); i++){
        if(sumSize % i === 0){
            let a = sumSize / i;
            if((a-2) * (i-2) === yellow){
                return [a,i];
            }
        }
    }
}