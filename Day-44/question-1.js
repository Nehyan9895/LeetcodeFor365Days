// 85. Maximal Rectangle

// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Input: matrix = [
//     ["1","0","1","0","0"],
//     ["1","0","1","1","1"],
//     ["1","1","1","1","1"],
//     ["1","0","0","1","0"]
// ]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

var maximalRectangle = function(matrix) {
    const rowLength = matrix.length;
    const columnLength = matrix[0].length;
    const heights = new Array(columnLength).fill(0);
    let maximumArea = 0;
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
            heights[columnIndex] = matrix[rowIndex][columnIndex] === '1' ? heights[columnIndex] + 1 : 0;
        }

        const stack = [];
        let heightIndex = 0;
        while (heightIndex < heights.length) {
            if (stack.length === 0 || heights[heightIndex] >= heights[stack[stack.length - 1]]) {
                stack.push(heightIndex);
                heightIndex++;
            } else {
                const height = heights[stack.pop()];
                let width = heightIndex - stack[stack.length - 1] - 1;
            if (stack.length === 0) {
                width = heightIndex;
            }

            maximumArea = Math.max(maximumArea, height * width);
        }
    }

            while (stack.length !== 0) {
                const height = heights[stack.pop()];
                let width = heightIndex - stack[stack.length - 1] - 1;
                if (stack.length === 0) {
                    width = heightIndex;
                }

                maximumArea = Math.max(maximumArea, height * width);

            }
  }

  return maximumArea;
};
