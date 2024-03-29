// 2962. Count Subarrays Where Max Element Appears at Least K Times

// You are given an integer array nums and a positive integer k.

// Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

// A subarray is a contiguous sequence of elements within an array.


// Input: nums = [1,3,2,3,3], k = 2
// Output: 6
// Explanation: The subarrays that contain the element 3 at least 2 times 
// are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

function countSubarrays(nums, k) {
    let subarrays = 0, count = 0;
    const max = Math.max(...nums);
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] === max) count++;
        while (count >= k) {
            subarrays += nums.length - r;
            if (nums[l++] === max) count--;
        }
    }
    return subarrays;
}