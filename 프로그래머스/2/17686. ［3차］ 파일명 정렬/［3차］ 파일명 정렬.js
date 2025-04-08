function solution(files) {
  function splitFilename(str) {
    let head = '';
    let number = '';
    let i = 0;

    // HEAD
    while (i < str.length && isNaN(str[i]) || str[i] === ' ') {
      head += str[i];
      i++;
    }

    // NUMBER
    while (i < str.length && !isNaN(str[i]) && str[i] !== ' ') {
      number += str[i];
      i++;
    }

    // TAIL
    let tail = str.slice(i);

    return [head, number, tail];
  }

  const splitArr = files.map(file => splitFilename(file));

  // 정렬
  splitArr.sort((a, b) => {
    const headA = a[0].toLowerCase();
    const headB = b[0].toLowerCase();

    if (headA < headB) return -1;
    if (headA > headB) return 1;

    const numA = parseInt(a[1], 10);
    const numB = parseInt(b[1], 10);

    return numA - numB;
  });

  return splitArr.map(parts => parts.join(''));
}
