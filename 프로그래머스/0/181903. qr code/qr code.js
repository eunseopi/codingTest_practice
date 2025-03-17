function solution(q, r, code) {
    // code 의 각 인덱스를 q로 나눈 나머지 r 인 위치를 이어라.
    let res = ""
    for(let i=0; i<code.length; i++){
        if(i % q === r) {
            res += code[i];
        }
    }
    return res;
}