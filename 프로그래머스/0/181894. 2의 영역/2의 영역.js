function solution(arr) {
    let sliceArr = [];
    let res = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 2) {
            sliceArr.push(i);
        }
    }
    if(sliceArr.length > 1) {
        return arr.slice(Math.min(...sliceArr), Math.max(...sliceArr) + 1);
    }
    else if(sliceArr.length === 1) {
        return [2];
    } else if(!arr.includes(2)) {
        return [-1]
    }
    
    
}