const numbers = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];

function brute_force_max(array) {
  let sum = 0;
  let low = 0;
  let high = 0;
  for (let i = 0; i < array.length; i++) {
    let sub_sum = 0;
    for (let j = i; j < array.length; j++) {
      sub_sum += array[j];
      if (sub_sum > sum) {
        sum = sub_sum;
        low = i;
        high = j;
      }
    }
  }
  return [low, high, sum];
}
console.log(brute_force_max(numbers));
