function solution(numbers) {
    const numSet = new Set();
    
    function Combination(current,remaining) {
        if(current.length > 0) {
            numSet.add(Number(current))
        }
        
        for(let i=0; i < remaining.length; i++){
            Combination(current + remaining[i], remaining.slice(0,i) + remaining.slice(i + 1))
        }
    }
    
    Combination('',numbers);
    
    let count = 0;
    numSet.forEach((num) => {
        if(isPrime(num)) {
            count++;
        }
    })
    return count;
}

function isPrime(num) {
    if(num < 2) return false;
    for(let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}