// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.


// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


var uniqueOccurrences = function(arr) {
    let frequency = {}
    arr.forEach(function(element){
        if(frequency[element]){
            frequency[element]++
        }else{
            frequency[element] = 1;
        }
    })
    
    let frequencies = Object.values(frequency)
    
    let set = new Set(frequencies)
    
    return set.size===frequencies.length
};