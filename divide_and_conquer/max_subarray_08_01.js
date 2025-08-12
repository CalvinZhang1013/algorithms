const numbers = [
  -13, -8, -25, -20, -3, -16, -23, -18, -20, -7, -12, -5, -22, -15, -4, -7,
];

function find_mid_cross_subarray(array, low, mid, high) {
  let left_sum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let max_left = mid;
  for (let i = mid; i >= low; i--) {
    sum += array[i];
    if (sum > left_sum) {
      left_sum = sum;
      max_left = i;
    }
  }
  right_sum = Number.NEGATIVE_INFINITY;
  sum = 0;
  let max_right = mid + 1;
  for (let j = mid + 1; j <= high; j++) {
    sum += array[j];
    if (sum > right_sum) {
      right_sum = sum;
      max_right = j;
    }
  }
  console.log(left_sum, right_sum, max_left, max_right);
  return [max_left, max_right, left_sum + right_sum];
  //   console.log(left_sum, right_sum, max_left, max_right);
}

function find_maximum_subarray(A, low, high) {
  if (high == low) {
    return [low, high, A[low]];
  } else {
    let mid = ~~((low + high) / 2);
    const [left_low, left_high, left_sum] = find_maximum_subarray(A, low, mid);
    const [right_low, right_high, right_sum] = find_maximum_subarray(
      A,
      mid + 1,
      high
    );
    const [cross_low, cross_high, cross_sum] = find_mid_cross_subarray(
      A,
      low,
      mid,
      high
    );
    if (left_sum >= right_sum && left_sum >= cross_sum) {
      return [left_low, left_high, left_sum];
    } else if (right_sum >= left_sum && right_sum >= cross_sum) {
      return [right_low, right_high, right_sum];
    }
    return [cross_low, cross_high, cross_sum];
  }
}

// find_mid_cross_subarray(
//   numbers,
//   0,
//   ~~((0 + numbers.length) / 2),
//   numbers.length
// );
console.log(find_maximum_subarray(numbers, 0, numbers.length));
