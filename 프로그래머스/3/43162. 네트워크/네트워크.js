function solution(n, computers) {
    const visited = Array(n).fill(false);
    
    function dfs(index) {
        visited[index] = true;
        
        for(let i=0; i<n; i++) {
            if(computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    let netWorkCount = 0;
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            dfs(i)
            netWorkCount++;
        }
    }
    
    return netWorkCount;
}