## Can you implement the dynamic-set operation INSERT on a singly linked list in O(1) time? How about DELETE?

INSERT: can be implemented in constant time by prepending to the list.

```python
LIST-INSERT(L, x)
    x.next = L.head
    L.head = x
```

DELETE: you can copy the value from the successor to element you want to delete, and then you can delete the successor in O(1) time. This solution is not good in situations when you have a large object, in that case copying the whole object will be a bad idea.
