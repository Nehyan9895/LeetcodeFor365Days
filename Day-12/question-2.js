// 2965. Find Missing and Repeated Values

// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
// Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.


// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].


// 2 <= n == grid.length == grid[i].length <= 50
// 1 <= grid[i][j] <= n * n
// For all x that 1 <= x <= n * n there is exactly one x that is not equal to any of the grid members.
// For all x that 1 <= x <= n * n there is exactly one x that is equal to exactly two of the grid members.
// For all x that 1 <= x <= n * n except two of them there is exatly one pair of i, j that 0 <= i, j <= n - 1 and grid[i][j] == x.



//approach one

var findMissingAndRepeatedValues = function(grid) {
    const flatArray = grid.flatMap(innerArray => innerArray);
    const res = []
    const duplicate = flatArray.find((val)=>flatArray.indexOf(val)!=flatArray.lastIndexOf(val))
    res.push(duplicate)
    const limit = flatArray.length;

    for(i=1;i<=limit;i++){
        if(!flatArray.includes(i)){
            res.push(i)
            break
        }
    }
    return res

};



//approach two

var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length
    let numbers = new Array(n*n + 1).fill(0)
    numbers[0] = -1

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let num = grid[i][j]
            numbers[num] += 1
        }
    }

    let missing
    let repeat
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        if (num == 0) {
            missing = i
        }
        if (num == 2) {
            repeat = i
        }
    }
    return [repeat, missing]

};