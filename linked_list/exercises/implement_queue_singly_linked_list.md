## Implement a queue by a singly linked list L. The operation ENQUEUE and DEQUEUE should still take O(1) time.

IS_EMPTY:

```python
IS_EMPTY(L)
	if L.head.next == NIL
			return true
	else return false
```

ENQUEUE:

```python
ENQUEUE(L, x)
	if QUEUE-EMPTY(L)
			L.head = x
	else L.tail.next = x
	L.tail = x
	x.next = NIL
```

DEQUEUE:

```python
DEQUEUE(L)
	if IS_EMPTY(L)
			error "underflow"
	else
			x = L.head
			if L.head == L.tail
				L.tail = NIL
			L.head = L.head.next
			return x
```
