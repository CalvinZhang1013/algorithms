## Use the substitution method to prove that the recurrence T(n) = T(n-1) + O(n) has the solution T(n) = O(n^2), as claimed at the beginning of Section 7.2.

\*\* we guess the solution is O(n^2)

T(n-1) = c[(n-1)^2]

T(n) ≤ c1[(n-1^2)] + c2n

≤ cn^2 - 2c1n + c1 + c2n

≤ c1n^2
