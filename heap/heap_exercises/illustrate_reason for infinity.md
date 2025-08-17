# Why do we bother setting the key of the inserted node to -Infinity in line 2 of MAX-HEAP-INSERT when the next thing we do is crease its key to the desire value?

Answer: The reason is that negative infinity will always make sure that the value will be inserted.

Solution: In order to pass the guard clause. Otherwise we have to drop the check if key < A[i].
