const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j >= i + 1; j--) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
}

bubble_sort(numbers);
console.log(numbers);
