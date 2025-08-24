const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -100, -200, -400];

function quicksort(A) {
  if (A.length <= 1) {
    return A;
  }

  const pivot = A[A.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < pivot) {
      left.push(A[i]);
    } else {
      right.push(A[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

quicksort(numbers);
console.log(numbers);
