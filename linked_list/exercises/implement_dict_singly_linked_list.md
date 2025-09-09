## Implement the dictionary operations INSERT, DELETE, and SEARCH using singly linked, circular lists. What are the running time of your procedure ?

INSERT: O(1)

```python
INSERT(L,x)
	x.next = L.nil.next
	L.nil.next = x
```

DELETE(L, k): O(n)

```python
DELETE(L,x)
	prev = L.nil.next
	while prev.key != x
				if(prev.next = L.nil)
						error "no element"
				prev = prev.next
	prev.next = x.next
```

Search: O(n)

```python
Search(L,k)
	current = L.nil.next
	while current.key != k
			if (current = L.nil)
					return false
			current = current.next
	return true
```
