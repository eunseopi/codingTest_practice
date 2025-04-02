class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._up();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down();
    return top;
  }

  _up() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] >= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _down() {
    let i = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;

      if (left < len && this.heap[left] > this.heap[largest]) largest = left;
      if (right < len && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(n, works) {
  const heap = new MaxHeap();

  for (let w of works) {
    heap.push(w);
  }

  while (n > 0 && heap.size() > 0) {
    const max = heap.pop();
    if (max > 0) heap.push(max - 1);
    n--;
  }

  return heap.heap.reduce((sum, v) => sum + v ** 2, 0);
}
