const reverseString = function(str) {
    let n = str.length;
    let temp = '';

    for (let i = n-1; i >= 0; i--)
    {
        temp += str[i];
    }

    return temp;
};

// Do not edit below this line
module.exports = reverseString;
