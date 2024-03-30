// 992. Subarrays with K Different Integers

// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.

// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]



var subarraysWithKDistinct = function(nums, k) {
    let n = nums.length;
   let m = new Array(n + 1).fill(0);
   let unique = 0;
   let Left = 0;
   let x = 0;

   let left = 0;
   for (let num of nums) {
       if (m[num] === 0) {
           unique++;
           if (unique > k) {
               m[nums[left]]--;
               unique--;
               left++;
               Left = 0;
           }
       }
       m[num]++;
       while (m[nums[left]] > 1) {
           m[nums[left]]--;
           left++;
           Left++;
       }
       if (unique === k) {
           x += Left + 1;
       }
   }
   return x;
};