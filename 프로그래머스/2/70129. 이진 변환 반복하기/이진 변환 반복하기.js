function solution(s) {
    let transCnt = 0;
    let removeCnt = 0;
    
    while(s.length > 1) {
        let newS = s.replace(/0/g, '');
        
        removeCnt += s.length - newS.length;
        
        s = newS.length.toString(2)
        transCnt++;
    }
    
    return [transCnt, removeCnt];
}
    