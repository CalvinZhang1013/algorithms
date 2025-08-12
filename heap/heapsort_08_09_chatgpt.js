/**
 * In-place Heapsort (ascending)
 * Time: O(n log n), Space: O(1)
 * Note: unstable sort.
 */

function heapSort(arr) {
  const n = arr.length;
  // Build max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let end = n - 1; end > 0; end--) {
    // Move current max to the end
    [arr[0], arr[end]] = [arr[end], arr[0]];
    // Restore heap property on reduced heap
    heapify(arr, end, 0);
  }

  return arr;
}

/**
 * Restore max-heap property for subtree rooted at index i,
 * assuming subtrees rooted at its children are already heaps.
 * This is an iterative version of max-heapify.
 *
 * @param {Array} arr - array representing the heap
 * @param {number} heapSize - effective size of heap in arr (elements at indices < heapSize)
 * @param {number} i - root index of subtree to heapify
 */
function heapify(arr, heapSize, i) {
  while (true) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < heapSize && arr[left] > arr[largest]) largest = left;
    if (right < heapSize && arr[right] > arr[largest]) largest = right;

    if (largest === i) break;

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest; // continue heapifying the affected subtree
  }
}

// Example
const a = [5, 3, 17, 10, 84, 19, 6, 22, 9];
console.log("before:", a.slice());
heapSort(a);
console.log("after: ", a);
