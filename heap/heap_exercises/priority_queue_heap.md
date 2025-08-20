# Show how to implement a first-in, first-out queue with a priority queue. Show how to implement a stack with a priority queue. (Queues and stacks are defined in [Section 10.1](https://www.notion.so/10-Elementary-Data-Structures-23d549825bf480af9202e8d5edf4a44f?pvs=21))

## Both are simple. For a stack we keep adding elements in increasing priority, while in a queue we add them in decreasing priority. For the stack we can set the new priority to HEAP-MAXIMUM(A) + 1. For the queue we need to keep track of it and decrease it on every iteration.

## Both are not every efficient. Furthermore, if the priority can overflow or underflow, so will eventually need to reassign priorities.
