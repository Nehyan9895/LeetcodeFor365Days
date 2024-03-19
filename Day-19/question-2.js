// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false


var validPalindrome = function (s) {
    let low = 0;
    let high = s.length - 1;

  while (low < high) {
    if (s[low] !== s[high]) {
      return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high-1);
    }
    low++, high--;
  }
  return true;
};

let isPalindrome = function (s, low, high) {
  while (low < high) {
    if (s[low] !== s[high]) return false;
    low++, high--;
  }
  return true;
};


