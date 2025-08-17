# 6.5-3 Write pseudocode for the procedures HEAP-MINIMUM, HEAP-EXTRACT-MIN, HEAP-DECREASE-KEY, and MIN-HEAP-INSERT that implement a min-priority queue with a min-heap.

# HEAP-MINIMUM(A)

return A[1];

# HEAP-EXTRACT-MIN(A)

if A.heap-size < 1

error “heap underflow”

min = A[1]

A[1] = A[heap-size]

A.heap-size = A.heapsize -1

MIN-HEAPIFY(A, 1)

return min

# HEAP-DECREASE-KEY(A, i, key)

if A[i] < key

error “key greater than i”

A[i] = key

while i > 1 A[PARENT(i) > A[i]]

exchange A[PARENT(i)] and A[i]

i = PARENT(i)

# MIN-HEAP-INSERT(A, key)

A.heap-size = A.heap-size + 1

A[A.heap-size] = Infinity

HEAP-DECREASE-KEY(A, A.heap-size, key)
