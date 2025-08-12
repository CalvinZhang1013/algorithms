const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -100, -200, -400];

function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
}

function binary_search(array, value, low, high) {}

insertion_sort(numbers);
console.log(numbers);
