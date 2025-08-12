function count_inversions(A, p, r) {
  let inversions = 0;
  if (p < r) {
    let q = ~~((p + r) / 2);
    inversions = inversions + count_inversions(A, p, q);
    inversions = inversions + count_inversions(A, q + 1, r);
    inversions = inversions + merge_inversions(A, p, q, r);
    return inversions;
  }
}

function merge_inversions(A, p, q, r) {
  let result = [];
}
