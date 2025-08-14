const a = [5, 3, 17, 10, 84, 19, 6, 22, 9];

function heap_increase_key(A, i, key) {
  build_max_heap(A);
  if (key < A[i]) {
    throw "key is smaller than i";
  }
  A[i] = key;
  parent = Math.floor((i - 1) / 2);
  while (i > 0 && A[parent] < A[i]) {
    [A[i], A[parent]] = [A[parent], A[i]];
    i = parent;
    parent = Math.floor((i - 1) / 2);
  }
}

function build_max_heap(numbers) {
  let length = numbers.length;
  for (let i = length - 1; i >= 0; i--) {
    max_heapify(numbers, i);
  }
}

function max_heapify(numbers, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left <= numbers.length && numbers[left] > numbers[i]) {
    largest = left;
  } else {
    largest = i;
  }
  if (right <= numbers.length && numbers[right] > numbers[largest]) {
    largest = right;
  }
  if (largest != i) {
    let temp = numbers[largest];
    numbers[largest] = numbers[i];
    numbers[i] = temp;
    max_heapify(numbers, largest);
  }
}

function max_heap_key_insert(A, key) {
  let new_length = A.length;
  A[new_length] = -Infinity;
  heap_increase_key(A, A.length - 1, key);
}

max_heap_key_insert(a, 1000);
console.log(a);
