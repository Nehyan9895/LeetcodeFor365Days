// 713. Subarray Product Less Than K


// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the
// elements in the subarray is strictly less than k.

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.


var numSubarrayProductLessThanK = function (nums, k) {
    let left = 0;
    let right = 0;
    let prod = 1;
    let result = 0;
    while(right < nums.length){
        if(k <= 1) return 0
        prod = prod * nums[right]
        while(prod >= k){
            prod = prod/nums[left];
            left++;
        }
        result += (right - left +1);
        right++;
    }
    return result
  };


