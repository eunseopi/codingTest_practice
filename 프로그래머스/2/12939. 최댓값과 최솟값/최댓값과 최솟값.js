function solution(s) {
    let newArr = s.split(" ").map(Number);
    let res = [];
    let max = Math.max(...newArr);
    let min = Math.min(...newArr);
    res.push(max, min);
    return res.sort((a,b) => a-b).join(" ")
}