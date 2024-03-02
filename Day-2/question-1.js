// 977. Squares of a Sorted Array


// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.



// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].




//Approach Number 1

var sortedSquares = function(nums) {
    for(var i=0;i<nums.length;i++){
        nums[i]*=nums[i]
    }

    return nums.sort((a,b)=>a-b)
};

//Approach Number 2
var sortedSquares2 = function(nums) {
    return nums.map((number)=>number**2).sort((a,b)=>a-b)
};


//Approach Number 3
var sortedSquares3 = function(nums) {
    const result = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    return result;

}

nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums));