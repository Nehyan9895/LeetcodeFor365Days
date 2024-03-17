// 57. Insert Interval

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
// represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals
// still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.


// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]


// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].




var insert = function(intervals, newInterval) {
    const ans = []
    const start = 0
    const end = 1
    let i = 0
    while(i < intervals.length && newInterval[start] > intervals[i][end]){
        ans.push(intervals[i])
        i++
    }
    while(i < intervals.length && newInterval[end] >= intervals[i][start]){
        newInterval[start] = Math.min(newInterval[start], intervals[i][start])
        newInterval[end] = Math.max(newInterval[end], intervals[i][end])
        i++
    }
    ans.push(newInterval)
    while(i<intervals.length){
        ans.push(intervals[i])
        i++
    }
    return ans
};