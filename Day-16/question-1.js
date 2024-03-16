// 525. Contiguous Array

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.


// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

var findMaxLength = function(nums) {
    let max_length = 0;
    let count = 0;
    let map = new Map();
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;

        if (map.has(count)) {
            max_length = Math.max(max_length, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return max_length;
};

