## Implement a stack using a singly linked list L. The operation PUSH and POP should still take O(1) time.

```python
STACK-EMPTY(L)
	if L.head == NIL
			return true
	else return false

```

- PUSH: adds an element in the beginning of the list.

```python
PUSH(L, x)
	x.next = L.head
	L.head = x
```

- POP: removes the first element from the list

```python
POP(L)
	if STACK-EMPTY(L)
			error "underflow"
	else
			x = L.head
			L.head = L.head.next
			return x
```
