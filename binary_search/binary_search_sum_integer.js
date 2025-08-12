const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function binary_search_sum(numbers, total) {
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i];
    let remainder = total - x;
    if (binary_search(numbers, remainder, i, numbers.length)) {
      return true;
    }
  }
  return false;
}

function binary_search(array, value, low, high) {
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

console.log(binary_search_sum(numbers, 21));
