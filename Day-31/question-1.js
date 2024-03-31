// 2444. Count Subarrays With Fixed Bounds

// You are given an integer array nums and two integers minK and maxK.

// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.

// A subarray is a contiguous part of an array.

// Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

var countSubarrays = function(nums, minK, maxK) {
    let minPosition = -1;
     let maxPosition = -1;
     let culpritIndex = -1;
     let res = 0;
     for(let i=0;i<nums.length;i++){
         if(nums[i] == minK) minPosition = i;
         if(nums[i] == maxK) maxPosition = i;
         if(nums[i] > maxK || nums[i] < minK) culpritIndex = i;
         let bound = Math.min(minPosition,maxPosition);
         let temp = bound - culpritIndex;
         res += temp <= 0 ? 0 :temp; 
     }
     return res;
 
 };