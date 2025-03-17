function solution(my_string, m, c) {
    let res = "";
    
    for (let i=c -1; i < my_string.length; i+=m) {
        res += my_string[i]
    }
    
    return res;
}