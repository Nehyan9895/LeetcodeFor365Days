// 678. Valid Parenthesis String

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:


// -> Any left parenthesis '(' must have a corresponding right parenthesis ')'.

// -> Any right parenthesis ')' must have a corresponding left parenthesis '('.

// -> Left parenthesis '(' must go before the corresponding right parenthesis ')'.

// -> '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Input: s = "()"
// Output: true

// Input: s = "(*))"
// Output: true


var checkValidString = function(s) {
    let  opencount = 0;
  let closecount = 0;
 let length= s.length-1;
 
  for( let i = 0; i <=length; i++){

    if(s[i] == "(" || s[i] == "*") 
    opencount++;
    
    else   opencount--;
      if(s[length - i] == ")" || s[length- i] == "*")
       closecount++;
      
        else closecount--;
        if(opencount < 0 || closecount < 0)
         return false;
  }

return true
};