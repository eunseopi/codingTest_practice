function solution(l, r) {
    const res = [];
    for(let i=l; i<=r; i++) {
        let strNum = i.toString();
        if([...strNum].every(c => c === "0" || c === "5")){
            res.push(i);
        }
    }
    return res.length > 0 ? res : [-1] 
}