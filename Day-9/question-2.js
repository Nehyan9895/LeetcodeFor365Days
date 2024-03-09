// 3046. Split the Array

// You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:

// => nums1.length == nums2.length == nums.length / 2.
// => nums1 should contain distinct elements.
// => nums2 should also contain distinct elements.


// Return true if it is possible to split the array, and false otherwise.

// Input: nums = [1,1,2,2,3,4]
// Output: true
// Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].


var isPossibleToSplit = function(nums) {
    let arr = new Array(nums.length).fill(0); 
    let count;

    for (let i = 0; i < nums.length; i++) {
    count = 1;
    if (nums[i] === null) continue;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            count++;
            arr[j] = null; 
        }
    }
    arr[i] = count;
    }
    let max = Math.max(...arr)
    if(max>2){
        return false
    }else{
        return true
    }
};


const nums = [1,1,2,2,3,4]

//expected output = true 

console.log(isPossibleToSplit(nums));

//output = true