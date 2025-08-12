const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function select_sort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    smallest = array[j];
    let index = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
        index = i;
      }
    }
    let temp = array[j];
    array[j] = smallest;
    array[index] = temp;
  }
  return array;
}

console.log(select_sort(numbers));
