function solution(n)
{
    let a = n.toString().split("").map(Number)
    let sum = 0;
    for(let i=0; i<a.length; i++){
        sum += a[i]
    }
    return sum;
}