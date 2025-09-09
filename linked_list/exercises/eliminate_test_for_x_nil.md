## As written, each loop iteration in the LIST-SEARCH` procedure requires two tests: one for x ≠ L.nil and one for x.key ≠ k. Show how to eliminate the test for x ≠ L.nil in each iteration.

```python
LIST-SEARCH(L, k)
	x = L.nil.next
	L.nil.key = k
	while x.key != k
			x = x.next
	return x
```
