// 402. Remove K Digits

// Given string num representing a non-negative integer num, and an integer k,
// return the smallest possible integer after removing k digits from num.

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.


var removeKdigits = function(num, k) {
    if (num.length === k) return '0';

   const stack = [];

   for (let i = 0; i < num.length; i++) {
       const current = num[i];
       while (stack.length && stack[stack.length - 1] > current && k > 0 ) {
           stack.pop();
           k--;
       }
       stack.push(current);
   }

   while (k > 0) {
       stack.pop();
       k--;
   }

   while (stack.length > 1 && stack[0] === '0') {
       stack.shift();
   }

   return stack.join('');
};