const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(numbers) {
  if (numbers.length === 1) {
    return numbers;
  }
  let middle = ~~(numbers.length / 2);
  let left = numbers.slice(0, middle);
  let right = numbers.slice(middle, numbers.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

// function merge(array, p, q, r) {
//   n1 = q - p + 1;
//   n2 = r - q;

//   var L = new Array(n1);
//   var R = new Array(n2);

//   for (let i = 0; i <= n1; i++) {
//     L[i] = array[p + i - 1];
//   }

//   for (let j = 0; j <= n2; j++) {
//     R[j] = array[q + j];
//   }
//   console.log(L);
//   console.log(R);
// }

// merge(numbers, 3, 6, 9);
