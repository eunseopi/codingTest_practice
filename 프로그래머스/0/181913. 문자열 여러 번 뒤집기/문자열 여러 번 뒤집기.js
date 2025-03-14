function solution(my_string, queries) {
    let arr = my_string.split("");
    
    for (let [s,e] of queries) {
        while(s < e) {
            [arr[s], arr[e]] = [arr[e],arr[s]]
            s++;
            e--;
        }
    }
    return arr.join('');
    
}