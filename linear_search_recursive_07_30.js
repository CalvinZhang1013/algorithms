const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linear_search(array, value, index) {
  if (index >= array.length) {
    return -1;
  }

  if (array[index] === value) {
    return index;
  }
  return linear_search(array, value, index + 1);
}

let result = linear_search(numbers, 9, 0);
console.log(result);
