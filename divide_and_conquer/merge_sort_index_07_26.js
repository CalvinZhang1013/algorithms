const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const random_nums = [
  67, 42, 18, 91, 23, 75, 5, 88, 30, 12, 79, 36, 9, 54, 21, 83, 15, 60, 47, 96,
  28, 72, 1, 57, 33, 80, 19, 64, 41, 8, 99, 26, 77, 14, 52, 39, 94, 6, 29, 70,
  17, 85, 44, 10, 51, 3, 97, 22, 68, 49,
];

function mergesort(A, p, r) {
  if (p < r) {
    let q = ~~((p + r) / 2);
    mergesort(A, p, q);
    mergesort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;
  let left = new Array(n1);
  let right = new Array(n2);
  for (let i = 0; i < n1; i++) {
    left[i] = A[p + i - 1];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = A[q + j];
  }
  let i = 0;
  let j = 0;
  for (let k = p; k < r; k++) {
    if (i > n1) {
      A[k] = right[j];
      j++;
    } else if (j > n2) {
      A[k] = left[i];
      i++;
    } else if (left[i] <= right[j]) {
      A[k] = left[i];
      i++;
    } else {
      A[k] = right[j];
      j++;
    }
  }
}

mergesort(numbers, 0, numbers.length);
console.log(numbers);
