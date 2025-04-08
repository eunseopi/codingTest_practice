function solution(m, n, board) {
    board = board.map(row => row.split(""));
    
    let answer = 0;
    
    while (true) {
        const toDelete = Array.from({length: m}, () => Array(n).fill(false));
        let anyDeleted = false;
        
        // 2x2 블록찾기
        for (let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                const current = board[i][j]
                if(current === " ") continue;
                if(
                    board[i+1][j] === current &&
                    board[i][j+1] === current &&
                    board[i+1][j+1] === current
                ) {
                    toDelete[i][j] = toDelete[i+1][j] = toDelete[i][j+1] = toDelete[i+1][j+1] = true;
                    anyDeleted = true;
                }
            }
        }
        
        if(!anyDeleted) break;
        
        
        // 2. 지우기
        
        for (let i=0; i<m; i++){
            for (let j=0; j<n; j++){
                if(toDelete[i][j]) {
                    board[i][j] = " ";
                    answer++;
                }
            }
        }
        
        // 3. 아래로 떨어지게
        for(let j=0; j<n; j++){
            let emptyRow = m - 1;
            for(let i=m-1; i>=0; i--){
                if(board[i][j] !== " "){
                    board[emptyRow][j] = board[i][j];
                    if(emptyRow !== i) board[i][j] = " ";
                    emptyRow--;
                }
            }
        }
    }
    return answer;
}