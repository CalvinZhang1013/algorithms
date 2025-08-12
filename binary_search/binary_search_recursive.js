const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binary_search_recursive(array, value, low, high) {
  if (low > high) {
    return false;
  }
  middle = ~~((low + high) / 2);
  if (value == array[middle]) {
    return middle;
  } else if (value > array[middle]) {
    return binary_search_recursive(array, value, middle + 1, high);
  } else {
    return binary_search_recursive(array, value, low, middle - 1);
  }
}

console.log(binary_search_recursive(numbers, 11, 0, numbers.length));
