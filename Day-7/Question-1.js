// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.


//Approach with fast pointer and slow pointer

var middleNode = function(head) {
    let slowPtr = head;
    let fastPtr = head;
    while(fastPtr&&fastPtr.next){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    return slowPtr
};



//Approach with an array

var middleNode = function (head) {
    let array = [];

    let length = 0;

    while (head !== null) {
        array.push(head);
        head = head.next;
        length++;
    }
    return array.at(length / 2)
};