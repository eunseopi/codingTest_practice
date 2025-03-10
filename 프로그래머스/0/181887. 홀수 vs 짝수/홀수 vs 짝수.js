function solution(num_list) {
    let a = 0;
    let b = 0;
    for(let i=0; i<num_list.length; i+=2) {
        a += num_list[i]
    }
    for(let i=1; i<num_list.length; i+=2) {
        b += num_list[i]
    }
    return Math.max(a,b);
}