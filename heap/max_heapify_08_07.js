const numbers = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

function max_heapify(array, i) {
  let left_index = 2 * i + 1;
  let right_index = 2 * i + 2;

  if (left_index < array.length && array[left_index] > array[i]) {
    largest = left_index;
  } else {
    largest = i;
  }
  if (right_index < array.length && array[right_index] > array[largest]) {
    largest = right_index;
  }
  if (largest !== i) {
    let temp = array[largest];
    array[largest] = array[i];
    array[i] = temp;
    max_heapify(array, largest);
  }
}

max_heapify(numbers, 1);
console.log(numbers);
