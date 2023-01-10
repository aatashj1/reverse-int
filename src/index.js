// module.exports = function reverse (n) {
//     let posNum = Math.abs(n);
//  let numToString = posNum.toString();
//  let reverseStr = numToString.split("").reverse().join("");
// return +reverseStr;
// }

module.exports = function reverse (n) {
    let posNum = Math.abs(n);
    let numToString = posNum.toString();
    let result = "";
    for (let i = numToString.length-1; i >= 0; i-- ){
        result += numToString[i];
    }  return result;
}

