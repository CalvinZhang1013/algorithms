const a = [5, 3, 17, 10, 84, 19, 6, 22, 9];

function max_heapify(A, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  largest = i;

  if (left < A.length && A[left] > A[i]) {
    largest = left;
  }
  if (right < A.length && A[right] > A[largest]) {
    largest = right;
  }
  if (largest != i) {
    [A[i], A[largest]] = [A[largest], A[i]];
    max_heapify(A, largest);
  }
}

function build_max_heap(numbers) {
  let length = numbers.length;
  for (let i = length - 1; i >= 0; i--) {
    max_heapify(numbers, i);
  }
}

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

function delete_heap(A, i) {
  let parent = Math.floor((i - 1) / 2);
  if (A[i] > A[parent]) {
    A[i] = A[A.heapsize - 1];
    max_heapify(A, i);
  } else {
    heap_increase_key(A, i, A[A.heapsize - 1]);
  }
}

build_max_heap(a);
delete_heap(a, 4);
console.log(a);
