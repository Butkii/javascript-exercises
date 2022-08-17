const fibonacci = function(val) {
    if (val < 0) {
        return "OOPS";
    }
    else if (val === 0) {
        return 0;
    }
    else if (val === 1) {
        return 1;
    }
    else {
        let a = 0;
        let b = 1;
        for (let i = 1; i < val; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
};
// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };  


// Do not edit below this line
module.exports = fibonacci;
