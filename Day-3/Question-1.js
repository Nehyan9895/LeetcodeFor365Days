// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]



var removeNthFromEnd = function(head, n) {
    let temp = new ListNode(0);
    temp.next = head;
    let first = temp;
    let second = temp;
    for (let i = 0; i <= n; i++) {
        second = second.next;
    }
    while (second !== null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;

    return temp.next;
};