// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


var isPalindrome = function(s) {
    let ss = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = ss.length - 1;
    while (left < right) {
        if (ss[left] !== ss[right]) {
            return false; 
        }
        left++;
        right--;
    }
    return true; 
};

