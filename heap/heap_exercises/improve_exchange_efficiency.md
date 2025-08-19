# Each exchange operation on line 5 of HEAP-INCREASE-KEY typically requires three assignments. Show how to use the idea of the inner loop of INSERTION-SORT to reduce the three assignments down to just one.

while i > 0 && A[parent(i)] < key

A[i] = A[parent]

i = parent(i)

A[i] = key
