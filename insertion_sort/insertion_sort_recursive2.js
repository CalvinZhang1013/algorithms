const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertion_sort_recursive(array, n = None) {
  if (n <= 1) {
    return array;
  }

  insertion_sort_recursive(array, n - 1);
  let key = array[n - 1];
  let j = n - 2;
  while (j >= 0 && array[j] > key) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = key;
}

insertion_sort_recursive(numbers, numbers.length);
console.log(numbers);
