// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxHeightLeft = height[left];
    let maxHeightRight = height[right];
    let water = 0;
    while (left < right) {
        if (maxHeightLeft < maxHeightRight) {
            left++;
            if (height[left] < maxHeightLeft) {
                water += maxHeightLeft - height[left];
            } else {
                maxHeightLeft = height[left];
            }
        } else {
            right--;
            if (height[right] < maxHeightRight) {
                water += maxHeightRight - height[right];
            } else {
                maxHeightRight = height[right];
            }
        }
    }
    return water;
};
