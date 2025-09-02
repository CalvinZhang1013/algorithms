## Explain how to implement two stacks in one array A[1…n] in such a way that neither stack overflows unless the total number of elements in both stacks together is n. The PUSH AND POP operations should run in O(1) time.

Solution: The first stack starts at 1 and grows up toward n, while the second starts from n and grows down towards 1. Stack overflow happens when an element is pushed when the two stack pointers are adjacent.
