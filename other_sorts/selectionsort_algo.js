const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection_sort(array) {
  if (array.length == 0) {
    return array;
  }
  for (let i = 1; i <= array.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        index = j;
      }
    }
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  return array;
}

console.log(selection_sort(numbers));
