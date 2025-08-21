## We can build a heap by repeatedly calling MAX-HEAP-INSERT to the heap. Consider the following variation on the BUILD-MAX-HEAP procedure:

BUILD-MAX-HEAP`(A)

A.heapsize = 1

for i = 2 to A.length

MAX-HEAP-INSERT(A, A[i])

\*\* Do the procedures BUILD-MAX-HEAP and BUILD-MAX-HEAP`always create the same heap when run on the same input array? Prove that they do, or provide a counterexample.

    Solution: the procedure BUILD-MAX-HEAP and BUILD-MAX-HEAP` do not always create the same heap when run on the same input array.

    Consider the following counterexample.

    input array A = <1,2,3>

    BUILD-MAX-HEAP(A): A = <3,2,1>.

    BUILD-MAX-HEAP`(A): A = <3,1,2>

\*\* Show that in the worst case, BUILD-MAX-HEAP` requires O(nlgn) time to build an n-element heap

    for every iteration, the newly inserted value travels all the way to the top of the heap takes nlgn
