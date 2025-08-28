## Show that the running time of QUICKSORT is O(n^2) when the array A contains distinct elements and is sorted in decreasing order.

Solution:

PARTITION does a “worst-case partitioning” when the elements are in decreasing order. It reduces the size of the subarray under consideration by only 1 at each step, which we’ve seen has running time O(n^2).

In particular, PARTITION, given a subarray A[p…r] of distinct elements in decreasing order, produces an empty partition in A[p…q-1], puts the pivot (originally in A[r]) into A[p], and produces a partition A[p+1…r] with only one fewer element than A[p…r]. The recurrence for QUICKSORT becomes T(n) = T(n-1) + O(n), which has the solution T(n) = O(n^2).
