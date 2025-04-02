function solution(n, words) {
    const used = new Map();
    
    for(let i=0; i<words.length; i++) {
        const word = words[i];
        const prev = words[i-1];
        
        if(
            used.has(word) ||
            (i > 0 && prev[prev.length - 1] !== word[0])
        ) {
            const turn = Math.floor(i / n) + 1;
            const person = (i % n) + 1;
            return [person, turn];
        }
        
        used.set(word,true);
    }
    
    return [0,0];
    
}