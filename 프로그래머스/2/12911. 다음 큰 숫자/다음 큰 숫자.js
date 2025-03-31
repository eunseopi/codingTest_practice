function solution(n) {
    const a = (x) => x.toString(2).split('1').length - 1;
    
    const b = a(n);
    
    while(a(++n) !== b) {}
    
    return n;
}

