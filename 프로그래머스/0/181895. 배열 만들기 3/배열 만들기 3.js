function solution(arr, intervals) {
    // let res = [];
    // for(const [a,b] of intervals) {
    //     res.push(...arr.slice(a,b + 1));
    // }
    // return res;
    
    return intervals.reduce((acc,[a,b]) => acc.concat(arr.slice(a,b + 1)), []);
}