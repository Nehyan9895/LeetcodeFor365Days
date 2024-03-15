// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].


// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]



var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = Array(n).fill(1)
    let pre = 1
    
    for(let i=0;i<n;i++){
        answer[i]*=pre;
        pre*=nums[i]
    }

    let suf  = 1;
    for(let i=n-1;i>=0;i--){
        answer[i]*=suf
        suf *=nums[i]
    }
    return answer
};

