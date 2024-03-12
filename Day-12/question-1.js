// 1171. Remove Zero Sum Consecutive Nodes from Linked List

// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that 
// sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.


// (Note that in the examples below, all sequences are serializations of ListNode objects.)

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.


var removeZeroSumSublists = function(head) {
    const dummy = new ListNode(0), map = {0: dummy};
    dummy.next = head;
    let sum = 0;

    for (let curr = dummy; curr; curr = curr.next) {
        sum += curr.val;
        map[sum] = curr;
    }


    sum = 0;
    for (let curr = dummy; curr; curr = curr.next) {
        sum += curr.val;
        curr.next = map[sum].next;
    }


    return dummy.next;
};
