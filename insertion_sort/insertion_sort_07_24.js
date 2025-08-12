const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
}

insertion_sort(numbers);
console.log(numbers);
