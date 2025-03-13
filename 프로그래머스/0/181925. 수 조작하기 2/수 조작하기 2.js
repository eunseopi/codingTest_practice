function solution(numLog) {
    let res = ""
    for(let i=0; i<numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1];
        
        if (diff === 1) res += "w"
        else if (diff === - 1) res += "s"
        else if (diff === 10) res += "d"
        else if (diff === -10) res += "a"
    }
    return res;
}