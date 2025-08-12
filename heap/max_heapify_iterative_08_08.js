const numbers = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

function max_heapify(numbers, i) {
  while (true) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < numbers.length && numbers[left] > numbers[i]) {
      largest = left;
    } else {
      largest = i;
    }
    if (right < numbers.length && numbers[right] > numbers[largest]) {
      largest = right;
    }
    if (largest == i) {
      return;
    }
    let tmp = numbers[largest];
    numbers[largest] = numbers[i];
    numbers[i] = tmp;
    largest = i;
  }
}

max_heapify(numbers, 1);
console.log(numbers);
