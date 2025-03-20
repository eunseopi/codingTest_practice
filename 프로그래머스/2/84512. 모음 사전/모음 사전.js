function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const weights = [781, 156, 31, 6, 1];
    
    return word.split('').reduce((acc, char, index) => {
        return acc + vowels.indexOf(char) * weights[index] + 1;
    }, 0);
}