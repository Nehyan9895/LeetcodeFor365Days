// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true


var isPalindrome = function(head) {
    let array = []
    while(head){
        array.push(head.val)
        head = head.next
    }
    return array.join('')===array.reverse().join('')
};