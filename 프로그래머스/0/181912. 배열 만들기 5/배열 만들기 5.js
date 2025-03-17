function solution(intStrs, k, s, l) {
//     let sliceStrs = [];
//     for(let i=0; i<intStrs.length; i++){
//         sliceStrs.push(intStrs[i].slice(s,s+l));
//     }
    
//     let numArr = [...sliceStrs].map((item) => Number(item));
//     let res =[];
//     for(let i=0; i<numArr.length; i++) {
//         if(numArr[i] > k){
//             res.push(numArr[i])
//         }
//     }
//     return res;
    // 더 나은 코드
    
    return intStrs
        .map(str => Number(str.slice(s, s+l)))
        .filter(num => num > k)
}