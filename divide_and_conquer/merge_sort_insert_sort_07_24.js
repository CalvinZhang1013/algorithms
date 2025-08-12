const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const random_nums = [
  67, 42, 18, 91, 23, 75, 5, 88, 30, 12, 79, 36, 9, 54, 21, 83, 15, 60, 47, 96,
  28, 72, 1, 57, 33, 80, 19, 64, 41, 8, 99, 26, 77, 14, 52, 39, 94, 6, 29, 70,
  17, 85, 44, 10, 51, 3, 97, 22, 68, 49,
];

function mergesort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middle = ~~(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  if (array.length < 50) {
    return merge(insertion_sort(left), insertion_sort(right));
  }

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let result = [];
  let leftindex = 0;
  let rightindex = 0;
  while (leftindex < left.length && rightindex < right.length) {
    if (left[leftindex] < right[rightindex]) {
      result.push(left[leftindex]);
      leftindex++;
    } else {
      result.push(right[rightindex]);
      rightindex++;
    }
  }
  while (leftindex < left.length) {
    result.push(left[leftindex]);
    leftindex++;
  }
  while (rightindex < right.length) {
    result.push(right[rightindex]);
    rightindex++;
  }
  return result;
}

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
  return array;
}

let result = mergesort(random_nums);
console.log(result);
