function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progresses, i) => Math.ceil((100 - progresses) / speeds[i]));
    console.log(days);
                              
    let count = 0;
    let maxDay = days[0];
    
    for(let i = 0; i < days.length; i++){
        if(days[i] > maxDay){
            answer.push(count);
            count = 1;
            maxDay = days[i];
        } else {
            count++;
        }
    }
    answer.push(count);
    
    return answer;
}