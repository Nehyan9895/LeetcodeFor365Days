// 1249. Minimum Remove to Make Valid Parentheses

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
// so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.


// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

var minRemoveToMakeValid = function(s) {
    const stack = []; 
    const str = s.split('');
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];  
        if (ch == '(')
            stack.push(i);
        else {
            if (ch == ')') {
                if (stack.length)
                    stack.pop();
                else
                    str[i] = '';
            }
        }
    }  
    for (let i of stack) {
        str[i] = '';
    }
    return str.join('');
};
