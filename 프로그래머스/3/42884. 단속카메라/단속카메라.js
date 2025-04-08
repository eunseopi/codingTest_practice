function solution(routes) {
    routes.sort((a,b) => a[1] - b[1]);
    
    let res = 0;
    let lastCam = -30001;
    
    for (let [start,end] of routes) {
        if(start > lastCam) {
            res++;
            lastCam = end;
        }
    }
    
    return res;
}