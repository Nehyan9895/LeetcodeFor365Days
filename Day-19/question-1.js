//621. Task Scheduler

// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n.
// Each cycle or interval allows the completion of one task. Tasks can be completed in any order,
// but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.


// ​Return the minimum number of intervals required to complete all tasks.



// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two cycles before doing A again. The same applies to task B.
// In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.


var leastInterval = function(tasks, n) {
    const taskMap = new Map();
    
    for (const task of tasks) {
        if (taskMap.has(task)) {
            taskMap.set(task, taskMap.get(task) + 1);
        } else {
            taskMap.set(task, 1);
        }
    }
    
    const taskCounts = Array.from(taskMap.values()).sort((a, b) => b - a);
    const maxCount = taskCounts[0];
    let idleSlots = (maxCount - 1) * n;
    
    for (let i = 1; i < taskCounts.length; i++) {
        idleSlots -= Math.min(taskCounts[i], maxCount - 1);
    }
    
    idleSlots = Math.max(0, idleSlots);
    
    return tasks.length + idleSlots;
};
