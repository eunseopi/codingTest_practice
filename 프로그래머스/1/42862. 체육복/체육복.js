function solution(n, lost, reserve) {
    // 1. 여벌인데 도난인 애 제거
    let realLost = lost.filter(x => !reserve.includes(x));
    let realReserve = reserve.filter(x => !lost.includes(x));
    
    // 2. 여벌 있는 애가 도난당한 애한테 빌려줌
    realLost.sort((a,b) => a - b);
    realReserve.sort((a,b) => a - b);
    
    for(let i=0; i<realLost.length; i++) {
        let lostStudent = realLost[i];
        
        let idx = realReserve.findIndex(r => Math.abs(r - lostStudent) === 1);
        if (idx !== -1) {
            realReserve.splice(idx, 1);
            realLost[i] = -1;
        }
    }
    
    const notCovered = realLost.filter(x => x !== -1).length;
    return n - notCovered
}