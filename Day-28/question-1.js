// 2958. Length of Longest Subarray With at Most K Frequency


// You are given an integer array nums and an integer k.

// The frequency of an element x is the number of times it occurs in an array.

// An array is called good if the frequency of each element in this array is less than or equal to k.

// Return the length of the longest good subarray of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.


// Input: nums = [1,2,3,1,2,3,1,2], k = 2
// Output: 6
// Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3
// occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
// It can be shown that there are no good subarrays with length more than 6.


function maxSubarrayLength(nums, k) {
    let l = 0;
    const hash = {};
    let cnt = 0;

    nums.forEach((num, r) => {
        hash[num] = hash[num] || 0;
        hash[num] += 1;

        cnt += hash[num] === k + 1 ? 1 : 0;

        if (cnt > 0) {
            hash[nums[l]] -= 1;
            cnt -= hash[nums[l]] === k ? 1 : 0;
            l += 1;
        }
    });

    return nums.length - l;
}