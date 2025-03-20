function solution(n) {
    // 1의 개수를 세는 함수
    const countOnes = (x) => x.toString(2).split('1').length - 1;

    // n의 이진수에서 1의 개수
    const originalCount = countOnes(n);

    // n보다 큰 숫자를 하나씩 증가시키며 1의 개수가 같은지 확인
    while (countOnes(++n) !== originalCount) {}

    // 조건을 만족하는 가장 작은 숫자를 반환
    return n;
}
