// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.



// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ")
    return arr[arr.length - 1].length
};

let s = 'Hello world'
console.log(lengthOfLastWord(s));
