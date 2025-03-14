function solution(number) {
    // let a = number.split("");
    // let b = 0;
    // for (let i=0; i<number.length; i++){
    //     b += Number(a[i])
    // }
    // return b % 9;
    
    return [...number].reduce((sum, digit) => sum + Number(digit), 0) % 9;
}