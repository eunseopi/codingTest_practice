function solution(operations) {
    let res = [];
    let queue = [];
    for(let i=0; i<operations.length; i++) {
        operations[i] = operations[i].split(" ").map((inx) => inx);
    }
    
    for(let i=0; i<operations.length; i++) {
        if(operations[i][0] === 'I') {
            queue.push(Number(operations[i][1]));
        }
        if(operations[i][0] === 'D' && operations[i][1] === "1") {
            let max = Math.max(...queue);
            let inx = queue.indexOf(max);
            queue.splice(inx,1);
        }
        if(operations[i][0] === 'D' && operations[i][1] === "-1") {
            let min = Math.min(...queue);
            let inx = queue.indexOf(min);
            queue.splice(inx,1);
        }
    }
    
    let maxNum = Math.max(...queue);
    let minNum = Math.min(...queue);
    
    return queue.length === 0 ? [0,0] : [maxNum, minNum];
    
}