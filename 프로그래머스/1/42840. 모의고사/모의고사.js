function solution(answers) {
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5]
    
    let scores = [0,0,0];
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === a[i % a.length]) {
            scores[0]++;
        }
        if (answers[i] === b[i % b.length]) {
            scores[1]++;
        }
        if (answers[i] === c[i % c.length]) {
            scores[2]++;
        }
    }
    
    const maxScore = Math.max(...scores);
    return scores
        .map((score, index) => (score === maxScore ? index  + 1 : null))
        .filter(num => num !== null);
}