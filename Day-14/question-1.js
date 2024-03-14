// 930. Binary Subarrays With Sum

// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]


var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    for (let left = 0; left< nums.length; left++) {
        let curr = 0;
        for (let right = left; right < nums.length; right++) {
            curr += nums[right];
            if (curr === goal) {
                count++;
            } else if (curr > goal) {
                break
            }
        }

    }
    return count;
};
