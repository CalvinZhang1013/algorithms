const a = [5, 3, 17, 10, 84, 19, 6, 22, 9];

function build_max_heap(numbers) {
  let length = numbers.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(numbers, length, i);
  }
  return numbers;
}

function heapify(arr, heapSize, i) {
  while (true) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < heapSize && arr[left] > arr[largest]) largest = left;
    if (right < heapSize && arr[right] > arr[largest]) largest = right;

    if (largest === i) break;

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest; // continue heapifying the affected subtree
  }
}

function extract_max_heap(A) {
  if (A.length < 0) {
    throw "error";
  }
  let numbers = build_max_heap(A);
  console.log(numbers);
  let length = numbers.length - 1;
  let maximum = numbers[0];
  A[0] = numbers[length];
  heapify(numbers, numbers.length - 1, 0);
  return maximum;
}

console.log(extract_max_heap(a));
console.log(a);
