const removeFromArray = function(...args) {
    const arr = args[0];
    const results = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            results.push(item);
        }
    });

    return results;

};

// Do not edit below this line
module.exports = removeFromArray;
