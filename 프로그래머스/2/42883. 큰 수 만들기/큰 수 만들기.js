function solution(number, k) {
    // 그리디 + 스택
    let cnt = 0;
    let stack = [];
    
    for(let digit of number) {
        while(stack.length && stack[stack.length - 1] < digit && cnt < k) {
            stack.pop(); 
            cnt++;
        }
        stack.push(digit);
    }
    
    while(cnt < k) {
        stack.pop();
        cnt++;
    }
    
    return stack.join('');
    
    
}