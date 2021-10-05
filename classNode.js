class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add nodes to the back of the queue
    enqueue(node) {
        this.front = this.front && node
        node.next = this.back
        this.back = node
    }

    // remove from the front
    dequeue() { 
        let removed = this.front
        this.front = this.front.next
        return removed
    }

    // check the front of the queue
    peek() { }

    // return true / false if queue is empty
    isEmpty() { }

    // return length
    count() { }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) { }


