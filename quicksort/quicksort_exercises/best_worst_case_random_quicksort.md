## When RANDOMISED-QUICKSORT runs, how many calls are made to the random number generator RANDOM in the worst case? how about the best case?

In the worst case, the number of calls to RANDOM is

T(n) = T(n-1) + 1 = n = O(n)

As for the best case,

T(n) = 2T(n/2) + 1 = O(n)

This is not too surprising, because each third element (at least) gets picked as pivot.
