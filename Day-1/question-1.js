//3019. Number of Changing Keys

// You are given a 0-indexed string s typed by a user. Changing a key is defined as
//  using a key different from the last used key. For example, s = "ab" has a change
//   of a key while s = "bBBb" does not have any.

// Return the number of times the user had to change the key.

// Note: Modifiers like shift or caps lock won't be counted in changing 
// the key that is if a user typed the letter 'a' and then the letter 'A' then it
//  will not be considered as a changing of key.

var countKeyChanges = function(s) {
    let ss = s.toLowerCase(),count =-1;
    for(var i=0;i<s.length;i++){
        if(ss[i]!=ss[i+1]){
            count++
        }
    }
    return count;
};

s ='aAbBcC'
console.log(countKeyChanges(s));