// 442. Find All Duplicates in an Array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
// and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.


Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]


//solution - 1

var findDuplicates = function(nums) {
    let frequency= {}
    let array =[]
    nums.forEach(function(element) {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
        
        if (frequency[element] > 1 && array.indexOf(element) === -1) {
            array.push(element);
        }
    });
    return array
};


//solution-2

const findDuplicates = (nums) => {
    const duplicates = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        }

        nums[index] = nums[index] * -1;
    }

    return duplicates;
};
