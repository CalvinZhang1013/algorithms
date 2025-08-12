const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionsort(array, n = array.length) {
  if (n <= 1) {
    return array;
  }

  insertionsort(array, n - 1);

  last = array[n - 1];
  j = n - 2;

  while (j >= 0 && array[j] > last) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = last;
}
insertionsort(numbers);
console.log(numbers);
