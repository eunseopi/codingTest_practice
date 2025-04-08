function solution(record) {
    const nickname = {};
    
    const logs = [];
    
    for(let i=0; i<record.length; i++) {
        const [action, id, nick] = record[i].split(" ");
        
        if (action === "Enter") {
            nickname[id] = nick;
            logs.push([id, "님이 들어왔습니다."]);
        } else if (action === "Leave") {
            logs.push([id, "님이 나갔습니다."]);
        } else if (action === "Change") {
            nickname[id] = nick;
        }
    }
    
    return logs.map(([id,msg]) => nickname[id] + msg);

}
