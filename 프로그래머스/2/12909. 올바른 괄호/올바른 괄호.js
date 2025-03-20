function solution(s) {
    let stackCount = 0;
    for(let i=0; i<s.length; i++){
        if (s[i] === "(") {
            stackCount++;
        }else {
            if(stackCount === 0) return false;
            stackCount--;
        }
    }
    
    return stackCount === 0
}