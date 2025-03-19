function solution(sizes) {
    // 명함을 돌려서 가로x세로를 했을 때
    // 다 들어갈 수 있는 가장 작은 지갑의 크기
    
    // 가로와 세로 길이 중 큰 값을 가로로, 작은 값을 세로로 두기.
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            let temp = sizes[i][0];
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = temp;
        }
    }
    
    let maxWidth = 0;
    let minHeight = 0;
    
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] > maxWidth) {
            maxWidth = sizes[i][0]
        } if (sizes[i][1] > minHeight) {
            minHeight = sizes[i][1]
        }
    }
    
    return maxWidth * minHeight;
}