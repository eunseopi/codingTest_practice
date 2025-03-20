function solution(tickets) {
    let route = [];
    let used = Array(tickets.length).fill(false);
    
    tickets.sort((a,b) => a[1].localeCompare(b[1]));
    
    function dfs(currentAirport, path) {
        if(path.length === tickets.length + 1) {
            route = path;
            return true;
        }
        
        for(let i=0; i<tickets.length; i++){
            const [from, to] = tickets[i];
            
            if(!used[i] && from === currentAirport) {
                used[i] = true;
                if(dfs(to, [...path, to])) {
                    return true;
                }
                used[i] = false;
            }
        }
        
        return false;
    }
    dfs('ICN', ["ICN"])
    return route;
}