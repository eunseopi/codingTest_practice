function solution(numbers) {
    const n = numbers.length;
    const result = Array(n).fill(-1);
    const stack = [];
    
    for(let i=n-1; i>=0; i--){
        const current = numbers[i];
        
        // 현재 수보다 작거나 같은 수는 뒷 큰수가 될 수 없으므로 제거
        while(stack.length && stack[stack.length - 1] <= current) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        
        stack.push(current);
    }
    
    return result;
}