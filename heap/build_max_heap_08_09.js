const numbers = [5, 3, 17, 10, 84, 19, 6, 22, 9];

function build_max_heap(numbers) {
  let length = numbers.length;
  for (let i = length - 1; i >= 0; i--) {
    max_heapify(numbers, i);
  }
}

function max_heapify(numbers, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left <= numbers.length && numbers[left] > numbers[i]) {
    largest = left;
  } else {
    largest = i;
  }
  if (right <= numbers.length && numbers[right] > numbers[largest]) {
    largest = right;
  }
  if (largest != i) {
    let temp = numbers[largest];
    numbers[largest] = numbers[i];
    numbers[i] = temp;
    max_heapify(numbers, largest);
  }
}

build_max_heap(numbers);
console.log(numbers);
