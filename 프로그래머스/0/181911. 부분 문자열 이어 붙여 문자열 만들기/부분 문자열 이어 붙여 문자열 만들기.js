function solution(my_strings, parts) {
    let res = "";
    
    for(let i=0; i<my_strings.length; i++){
        const [s,e] = parts[i];
        res += my_strings[i].slice(s, e + 1);
    }
    
    return res;
}