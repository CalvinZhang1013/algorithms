const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergesort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = ~~(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

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

let result = mergesort(numbers);
console.log(result);
