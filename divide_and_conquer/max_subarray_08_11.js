const numbers = [
  -13, -8, -25, -20, -3, -16, -23, -18, -20, -7, -12, -5, -22, -15, -4, -7,
];

function max_subarray(numbers, low, high) {
  if (low === high) {
    return [low, high, numbers[low]];
  } else {
    let middle = ~~((low + high) / 2);
    const [left_low, left_high, left_sum] = max_subarray(numbers, low, middle);
    const [right_low, right_high, right_sum] = max_subarray(
      numbers,
      middle + 1,
      high
    );
    const [cross_low, cross_high, cross_sum] = cross_max_subarray(
      numbers,
      low,
      middle,
      high
    );
    if (left_sum > right_sum && left_sum > cross_sum) {
      return [left_low, left_high, left_sum];
    } else if (right_sum > left_sum && right_sum > cross_sum) {
      return [right_low, right_high, right_sum];
    } else {
      return [cross_low, cross_high, cross_sum];
    }
  }
}

function cross_max_subarray(numbers, low, middle, high) {
  let left_sum = -Infinity;
  let sum = 0;
  let left_index = middle;
  for (let i = middle; i >= low; i--) {
    sum += numbers[i];
    if (sum > left_sum) {
      left_sum = sum;
      left_index = i;
    }
  }
  sum = 0;
  let right_sum = -Infinity;
  let right_index = middle + 1;
  for (let j = middle + 1; j <= high; j++) {
    sum += numbers[j];
    if (sum > right_sum) {
      right_sum = sum;
      right_index = j;
    }
  }
  return [left_index, right_index, left_sum + right_sum];
}

console.log(max_subarray(numbers, 0, numbers.length));
