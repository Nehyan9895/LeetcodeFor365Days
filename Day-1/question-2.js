//2864. Maximum Odd Binary Number


// You are given a binary string s that contains at least one '1'.

// You have to rearrange the bits in such a way that the resulting binary number
// is the maximum odd binary number that can be created from this combination.

// Return a string representing the maximum odd binary number that can be created from the given combination.

// Note that the resulting string can have leading zeros.



var maximumOddBinaryNumber = function(s) {
    s=s.split('').sort((a,b)=>b-a)
    for(var i=0;i<s.length;i++){
        if(s[i]==='0'){
            [s[i-1],s[s.length-1]] = [s[s.length-1],s[i-1]]
            break;
        }
    }
    return s.join('')
};

const s = '1100'
console.log(maximumOddBinaryNumber(s));