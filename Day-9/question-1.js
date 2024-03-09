// 2540. Minimum Common Value

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// return the minimum integer common to both arrays.
// If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.


var getCommon = function(nums1, nums2) {
    let i =0;
    let j=0
   while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return -1;
};

const num1 = [1,2,3];
const num2 = [2,4];


//expected output = 2

console.log(getCommon(num1,num2));

//output = 2
