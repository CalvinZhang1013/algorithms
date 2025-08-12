const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binary_search_iterative(array, value, low, high) {
  while (low <= high) {
    middle = ~~((low + high) / 2);
    if (array[middle] == value) {
      return middle;
    } else if (array[middle] > value) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return false;
}

console.log(binary_search_iterative(numbers, 11, 0, numbers.length));
