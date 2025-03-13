function solution(num_list) {
    let result = ""
    let a = ""
    let b = ""
    for(let i=0; i<num_list.length; i++) {
        if(num_list[i] % 2 === 0) {       
            a += num_list[i];
        } else {
            b += num_list[i];
        }
    }
    
    return parseInt(a) + parseInt(b)
}