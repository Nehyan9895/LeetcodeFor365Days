// 459. Repeated Substring Pattern


// Given a string s, check if it can be constructed by taking a substring of it and appending
// multiple copies of the substring together.

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

var repeatedSubstringPattern = function(s) {
    let len = s.length
    for(i=1;i<=len/2;i++){
        if(len%i===0){
            let sub = s.substring(0,i)
            
            if(sub.repeat(len/i)===s){
                return true
            }
        }
    }
    return false
};
