function solution(skill, skill_trees) {
    let cnt = 0;
    
    for(let tree of skill_trees) {
        const filtered = tree.split("").filter(s => skill.includes(s)).join('');
        if(skill.startsWith(filtered)) cnt++;
    }
    
    return cnt;
}