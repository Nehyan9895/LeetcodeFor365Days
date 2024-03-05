// 1750. Minimum Length of String After Deleting Similar Ends


// Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm
//  on the string any number of times:

// -Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
// -Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
// -The prefix and the suffix should not intersect at any index.
// -The characters from the prefix and suffix must be the same.
// -Delete both the prefix and the suffix.


// Return the minimum length of s after performing the above operation any number of times (possibly zero times).


var minimumLength = function(s) {
    left = 0
  right = s.length - 1

  while (true) {
      if (s[left] !== s[right]) break
      while(s[left] === s[left + 1] && left <= right) left ++
      while(s[right] === s[right - 1] && left <= right) right --
      if (right === left) return 1
      if (left >= right) return 0
      left ++
      right --
  }

  ans = right - left
  
  return ans === 0 ? ans : ans + 1
};


const s ='aabccabba';

//expected = 3

console.log(minimumLength(s));

//Output = 3