function solution(A, B) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    
    let score = 0;
    let j = 0;
    
    for (let i=0; i<A.length; i++){
        while(j < B.length && B[j] <= A[i]) {
            j++
        }
        if (j < B.length) {
            score++;
            j++;
        }
    }
    return score;
    
}