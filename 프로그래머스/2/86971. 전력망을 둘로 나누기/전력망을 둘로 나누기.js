function solution(n, wires) {
    let minDifference = Infinity;
    
    const graph = Array.from({length : n + 1}, () => []);
    
    for(const [v1,v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    function dfs(node, visited) {
        visited[node] = true;
        let count = 1;
        
        for(const neighbor of graph[node]) {
            if(!visited[neighbor]) {
                count += dfs(neighbor, visited);
            }
        }
        
        return count;
    }
    
    for(const [v1,v2] of wires) {
        const visited = Array(n+1).fill(false);
        visited[v2] = true;
        
        const subTreeSize = dfs(v1, visited);
        const difference = Math.abs((n - subTreeSize) - subTreeSize);
        
        minDifference = Math.min(minDifference, difference);
    }
    
    return minDifference;
}