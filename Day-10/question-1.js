// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.



//Example 1

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]


// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.





//Approach 1

var intersection = function(nums1, nums2) {
    const result = []
    for(let i=0;i<nums1.length;i++){
        if(nums1[i]==null)continue;
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                result.push(nums1[i]);
                nums1[i]=null;
            }
        }
    }
    return result.filter((value, index) => result.indexOf(value) === index);
}


//Approach 2 using Set

var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let result = new Set()

    for(var i=0;i<nums2.length;i++){
        if(set.has(nums2[i])){
            result.add(nums2[i])
        }
    }

    return Array.from(result)
}