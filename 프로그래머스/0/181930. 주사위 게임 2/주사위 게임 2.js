function solution(a, b, c) {
    const sum = a + b + c;
    const sumSquared = a**2 + b**2 + c**2;
    const sumCubed = a**3 + b**3 + c**3;

    if (a !== b && b !== c && a !== c) {
        return sum;
    } else if (a === b || b === c || a === c) {
        if (a === b && b === c) {
            return sum * sumSquared * sumCubed;
        } else {  
            return sum * sumSquared;
        }
    }
}
