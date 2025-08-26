## What value of q does PARTITION return when all elements in the array A[p…r] have the same value? Modify PARTITION so that q = [(p + r)/2] when all elements in the array A[p..r] have the same value.

it returns r.

We can modify PARTITION by counting the number of comparisons in which A[j] = A[r] and then subtracting half that number from the pivot index.
