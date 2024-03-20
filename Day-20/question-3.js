// 1669. Merge In Between Linked Lists

// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure indicate the result:


// Build the result list and return its head.


// Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place.
//              The blue edges and nodes in the above figure indicate the result.

var mergeInBetween = function(list1, a, b, list2) {
    let tail2;
    let node2 = list2;
    while (node2.next) {
        node2 = node2.next;
    }
    tail2 = node2;

    let prev1 = list1;
    let node1 = list1.next;
    let i = 1;
    while (node1) {
        if (i == a) {
            prev1.next = list2;
        }
        if (i == b) {
            tail2.next = node1.next;
            return a === 0 ? list2 : list1;
        }
        i++;
        prev1 = node1;
        node1 = node1.next;
    }
};

