// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

var maxArea = function(height) {
    let i = 0;
     let j = height.length - 1;
     let max = Number.MIN_SAFE_INTEGER;
     while (i < j) {
         const area = Math.min(height[i], height[j]) * (j - i);
         max = Math.max(max, area);
         if (height[i] > height[j]) {
             j--;
         } else { i++ }
     }
     return max;
 };