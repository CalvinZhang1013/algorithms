const x = 100;
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 10;

function naive_horner_rule(n, x, a) {
  let y = 0;
  for (let k = 0; k < n; k++) {
    let temp = 1;
    for (let i = 0; i < k; i++) {
      temp = temp * x;
    }
    y = y + a[k] * temp;
  }
  return y;
}

function horner_rule(n, x, a) {
  let y = 0;
  for (let i = n - 1; i >= 0; i--) {
    y = a[i] + x * y;
  }
  return y;
}

console.log(naive_horner_rule(n, x, a));
console.log(horner_rule(n, x, a));
