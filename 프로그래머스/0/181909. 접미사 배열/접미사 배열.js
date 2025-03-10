function solution(my_string) {
    let a = Array.from({length : my_string.length}, (_,i) => my_string.slice(i));
    return a.sort();
}