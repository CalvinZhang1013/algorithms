const numbers = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];

function linear_max_subarray(numbers) {
  let sum_end_here = -Infinity;
  let max_sum = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    let sum_end_high = i;
    let sum_end_low = i;
    if (sum_end_here > 0) {
      sum_end_here = sum_end_here + numbers[i];
    } else if (sum_end_low == i) {
      sum_end_here = numbers[i];
    }
    if (sum_end_here > max_sum) {
      max_sum = sum_end_here;
      low = sum_end_low;
      high = sum_end_high;
    }
  }
  return [low, high, max_sum];
}

console.log(linear_max_subarray(numbers));
