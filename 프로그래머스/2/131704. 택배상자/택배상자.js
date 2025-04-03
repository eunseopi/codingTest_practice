function solution(order) {
    let stack = [];       // 보조 벨트 역할 (스택)
    let answer = 0;       // 실은 상자 개수
    let idx = 0;          // order에서 현재 실어야 할 상자의 인덱스

    for (let box = 1; box <= order.length; box++) {
        stack.push(box);  // 메인 벨트에서 상자 나옴 → 스택에 일단 넣음

        // 스택에서 트럭에 실을 수 있을 때까지 계속 빼기
        while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop();      // 트럭에 실음 (스택에서 꺼냄)
            idx++;            // 다음 실어야 할 순서로 넘어감
            answer++;         // 실은 개수++
        }
    }

    return answer;
}
