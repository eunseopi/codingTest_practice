function solution(my_string, s, e) {
    let arr = my_string.split("");
    
    for (let i=s; i<=e; i++) {
        while(s < e) {
            [arr[s], arr[e]] = [arr[e],arr[s]]
            s++;
            e--;
        }
    }
    return arr.join('');
}