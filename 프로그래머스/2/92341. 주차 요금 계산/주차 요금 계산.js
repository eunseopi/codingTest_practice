function solution(fees, records) {
    // fees[0] = 기본 시간(분)
    // fees[1] = 기본 요금(원)
    // fees[2] = 단위 시간(분)
    // fees[3] = 단위 요금(원)
    
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const parking = new Map(); // 현재 주차중인 차량
    const totalTime = new Map();
    
    const getMinutes = (timeStr) => {
        const [h,m]  = timeStr.split(":").map(Number);
        return h * 60 + m;
    };
    
    // 입출력 기록 순회
    for(let record of records) {
        const [timeStr, carNum, action] = record.split(" ");
        const time = getMinutes(timeStr);
        
        if(action === "IN") {
            parking.set(carNum, time);
        } else {
            const inTime = parking.get(carNum);
            const parkedTime = time - inTime;
            parking.delete(carNum);
            
            totalTime.set(carNum, (totalTime.get(carNum) || 0) + parkedTime);
        }
    }
    
    // 출차 기록 없는거
    const endOfDay = getMinutes("23:59");
    for(let [carNum, inTime] of parking.entries()) {
        const parkedTime = endOfDay - inTime;
        totalTime.set(carNum, (totalTime.get(carNum) || 0) + parkedTime);
    }
    
    // 차량번호 오름차순 정렬
    const result = [...totalTime.entries()]
    .sort((a,b) => a[0].localeCompare(b[0]))
    .map(([_,time]) => {
        if(time <= baseTime) return baseFee;
        return baseFee + Math.ceil((time - baseTime) / unitTime ) * unitFee;
    })
    
    return result;
}