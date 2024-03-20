// 744. Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
// There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target.
// If such a character does not exist, return the first character in letters.


// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.



var nextGreatestLetter = function(letters, target) {
    let set = new Set(letters)
    for(let c of set){
        if(c>target) return c
    }
    return letters[0]
};
