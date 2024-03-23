// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]



var reorderList = function(head) {
    if(!head||!head.next)return;

    let slow = head;
    let fast = head;
    while(fast.next&&fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev= null;
    let curr = slow.next;
    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    slow.next = null

    let p1 = head;
    let p2 = prev;
    while(p1&&p2){
        let nextP1 = p1.next
        let nextP2 = p2.next
        p1.next = p2
        p2.next = nextP1
        p1 = nextP1
        p2 = nextP2
    }
};