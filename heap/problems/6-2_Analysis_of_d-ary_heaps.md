## A **d-ary heap** is like a binary heap, but (with one possible exception) non-leaf nodes have d children instead of 2 children.

# 1. How would you represent a d-ary heap in an array ?

    ** We can represent a d-ary heap in a 1-dimensional array as follows. The root resides in A[1], its children reside in order in A[2] through A[d+1], their children reside in order in A[d+2] through A[d^2 + d + 1], and so on. The following two procedures map a node with index i to its parent and to its jth child ( for 1 ≤ j ≤ d), respectively.

    d-ARY-PARENT(i)

    return floor((i - 2) / d + 1)

    d-ARY-CHILD(i, j)

    return d(i - 1) + j + 1

    To convince yourself that these procedures really work, verify that

    d-ARY-PARENT(d-ARY-CHILD(i, j)) = i,

    for any 1 ≤ j ≤ d. Notice that the binary heap procedures are special case of the above procedures when d = 2.

## b. What is the height of a d-ary heap of n elements in terms of n and d ?

\*\* Solution: Since each node has d children, the height of a d-ary heap with n nodes is O(logd n ) = O(lgn / lgd).

## c. Give an efficient implementation of EXTRACT-MAX in a d-ary max-heap. Analyze its running time in terms of d and n.

\*\* Solution: The procedure HEAP-EXTRACT-MAX given in the text for binary heaps works fine for d-ary heaps too. The change needed to support d-ary heaps is in MAX-HEAPIFY, which must compare the argument node to all d children instead of just 2 children. The running time of HEAP-EXTRACT-MAX is still the running time for MAX-HEAPIFY, but that now takes worst-case time proportional to the product of the height of the heap by the number of children examined at each node (at most d), namely O(dlogd n) = O(dlgn / lgd).

## d. Give an efficient implementation of INSERT in a d-ary max-heap. Analyze its running time in terms of d and n.

\*\* Solution: The procedure MAX-HEAP-INSERT given in the text for binary heaps works fine for d-ary heaps too, assuming that HEAP-INCREASE-KEY works for d-ary heaps. The worst-case running time is still O(h), where h is the height of the heap. (Since only parent pointers are followed, the number of children a node has is irrelevant.) For a d-ary heap, this is O（logd n) = O(lgn / lgd).

## e. Give an efficient implementation of INCREASE-KEY(A, i, k), which flags an error if k < A[i], but otherwise sets A[i] = k and then updates the d-ary max-heap structure appropriately. Analyze its running time in terms of d and n.

\*\* Solution: The HEAP-INCREASE-KEY procedure with two small changes works for d-ary heaps. First, because the problem specifies that the new key is given by the parameter k, change instances of the variable key to k. Second, change calls of Parent to calls of d-ary-parent from part(a).

In the worst case, the entire height of the tree must be traversed, so the worst-case running time is O(h) = O(logd n) = O(lgn / lgd).
