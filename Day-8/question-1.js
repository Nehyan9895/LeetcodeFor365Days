//3005. Count Elements With Maximum Frequency

//You are given an array nums consisting of positive integers.

//Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

//The frequency of an element is the number of occurrences of that element in the array.

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.


var maxFrequencyElements = function(nums) {
    let arr = new Array(nums.length).fill(0)
    let count;
    for(let i=0;i<nums.length;i++){
        count = 1;
        if(nums[i]==null)continue
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++;
                arr[j]=null;;
            }
        }
        arr[i]=count
    }
    let max = Math.max(...arr)

    let maxCount = arr.filter(num=>num===max).length;

    return maxCount*max
};

const nums =  [1,2,2,3,1,4];
console.log(maxFrequencyElements(nums));
