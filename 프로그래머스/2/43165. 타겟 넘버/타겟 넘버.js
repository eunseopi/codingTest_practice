function solution(numbers, target) {
    function dfs(index, currentSum) {
        if(index === numbers.length) {
            return currentSum === target ? 1 : 0;
        }
        
        const add = dfs(index + 1, currentSum + numbers[index]);
        const substract = dfs(index + 1, currentSum - numbers[index]);
        
        return add + substract;
    }
    
    return dfs(0,0)
}