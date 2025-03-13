function solution(num_list) {
    let dup = 1;
    let sum = 0;
    for (let i=0; i<num_list.length; i++) {
        dup *= num_list[i];
        sum = sum + num_list[i];
    }

    
    return dup < sum**2 ? 1 : 0;

}