const repeatString = function(string, number) {
    let num = number; //copying number parameter to temporary variable
    let returnString = '';

    if (num < 0) return 'ERROR';
    
    while (num--)
    {
        returnString += string;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
