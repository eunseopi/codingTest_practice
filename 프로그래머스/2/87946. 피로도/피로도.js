function solution(k, dungeons) {
    let maxDungeons = 0;
    
    function dfs(remainingK, count, visited) {
        maxDungeons = Math.max(maxDungeons, count)
        
        for(let i=0; i<dungeons.length; i++) {
            if(!visited[i] && remainingK >= dungeons[i][0]){
                visited[i] = true;
                dfs(remainingK - dungeons[i][1], count + 1, visited)
                visited[i] = false;
            }
        }
    }
    
    let visit = new Array(dungeons.length).fill(false);
    dfs(k,0,visit);
    return maxDungeons;
}