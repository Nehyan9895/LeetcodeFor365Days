// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array
// and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true


// Input: nums = [1,2,3,4]
// Output: false



var containsDuplicate = function(nums) {
    const set = new Set(nums)   
    return set.size !== nums.length
};
