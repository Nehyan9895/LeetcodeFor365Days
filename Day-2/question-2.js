//3024. Type of Triangle

//You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.

// A triangle is called isosceles if it has exactly two sides of equal length.

// A triangle is called scalene if all its sides are of different lengths.

// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

// Input: nums = [3,3,3]
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.



var triangleType = function(nums) {
    const [a, b, c] = nums;
     const max = Math.max(nums[0],nums[1],nums[2])
     if(2 * max >= a+b+c){
         return "none"
     }
     else if(a === b && a===c){
         return "equilateral";
     }else if(a === b || a === c || b === c){
         return "isosceles";
     }else{
         return "scalene";
     }
 };

 const nums1 = [4,2,3]
 console.log(triangleType(nums1));

 const nums2 = [1,2,2]
 console.log(triangleType(nums2));

 const nums3= [3,3,3]
 console.log(triangleType(nums3));

 const nums4 = [1,2,4]
 console.log(triangleType(nums4));

