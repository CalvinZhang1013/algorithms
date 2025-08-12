const numbers = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

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

function heapsort(numbers) {
  const n = numbers.length;
  build_max_heap(numbers);
  // Extract elements from heap one by one
  for (let end = n - 1; end > 0; end--) {
    // Move current max to the end
    console.log(numbers);
    [numbers[0], numbers[end]] = [numbers[end], numbers[0]];
    // Restore heap property on reduced heap
    heapify(numbers, end, 0);
  }

  return numbers;
}

console.log(build_max_heap([4, 13, 20, 8, 7, 17, 2, 5]));
