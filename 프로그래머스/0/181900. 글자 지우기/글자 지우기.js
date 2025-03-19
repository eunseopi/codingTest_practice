function solution(my_string, indices) {
    let indexSet = new Set(indices);
    return [...my_string]
        .filter((_,i) => !indexSet.has(i))
        .join('')
}