## An m _ n Young tableau is an m _ n matrix such that the entries of each row are in sorted order from left to right and the entries of each column are in sorted order from top to bottom. Some of the entries of a Young tableau may be infinity, which we treat as nonexistent elements. Thus, a Young tableau can be used to hold r ≤ mn finite numbers.

\*\* 1. Draw a 4 \_ 4 Young tableau containing the elements {9, 16, 3, 2, 4, 8, 5, 14, 12}

    | 2 | 3 | 4 |
    | --- | --- | --- |
    | 5 | 8 | 9 |
    | 12 | 14 | 16 |

| 2        | 3        | 12       | 14       |
| -------- | -------- | -------- | -------- |
| 4        | 8        | 16       | infinity |
| 5        | 9        | infinity | infinity |
| infinity | infinity | infinity | infinity |

\*\* b. Argue that an m \* n Young tableau Y is empty if Y[1,1] = infinity. Argue that Y is full (contains m n elements) if Y[m,n] < infinity

Solution: if the top left element is infinity, then all the elements on the first row need to be infinity. But if this is the case, all other elements need to be infinity because they are larger than the first element on their column.

if the bottom right element is smaller than infinity, all the elements on the bottom row need to be smaller than infinity. But so are the other elements in the tableau, because each is smaller than the bottom element of its column.

\*\* c. Give an algorithm to implement EXTRACT-MIN on a nonempty m _ n Young tableau that runs in O(m + n) time. Your algorithm should use a recursive subroutine that solves an m _ n problem by recursively solving either an (m - 1) _ n or an m _ (n - 1) subproblem. (Hint: Think about MAX-HEAPIFY.) Define T(p), where p = m + n, to be the maximum running time of EXTRACT-MIN on any m \* n Young tableau. Give and solve a recurrence for T(p) that yields the O(m+n) time bound.

EXTRACT-MIN(A, m, n)

if (m == 1 && n == 1)

return A[m][n]

if (A[m-1][n] < A[m][n])

min_row = m - 1

min_col = n

if (A[m][n-1] < A[min_row][min_col])

min_row = m

min_col = n - 1

if (min_row ≠ m || min_col ≠ n)

exchange A[m][n] with A[min_row][min_col]

EXTRACT_MIN(A, min_row, min_col)

\*\* d. Show how to insert a new element into a nonfull m \* n Young tableau in O(m+n) time.

The algorithm is very similar to the previous, except that we start with the bottom right element of the tableau and move it upwards and leftwards to the correct position. The asymptotic analysis is the same.

\*\* e. Using no other sorting method as a subroutine, show how to use an n \* n Young tableau to sort n ^ 2 numbers in O(n^3) time.

We can sort by starting with an empty tableau and inserting all the n^2 elements in it. Each insertion is O(n+n) = O(n). The complexity is n^2O(n) = O(n^3). Afterwards, we can take them one by one and put them back in the original array which has the same complexity. In total, its O(n^3).

We can also do it in place if we allow for “partial” tableaus where only a portion of the top rows (and a portion of the last of them) is in the tableau. Then we can build the tableau in place and then start putting each minimal element to the end. This would be asymptotically equal, but use constant memory. It would also sort the array in reverse.

\*\* f. Give an O(m+n)-time algorithm to determine whether a given number is sorted in a given m \* n Young algorithm.
