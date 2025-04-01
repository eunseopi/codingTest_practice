function solution(n)
{
    let batteryUsage = 0;
    
    while (n > 0){
        if(n % 2 === 0 ){
            // 짝수일 때는 순간이동
            n = n / 2;
        } else {
            // 홀수일 때는 점프 ( 배터리 사용 )
            n -= 1;
            batteryUsage += 1;
        }
    }
    
    return batteryUsage;
}