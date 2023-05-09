/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let numberString = "";
  let reverseString = "";
  let reversedNumber = 0;
  if (x >= -Math.pow(2, 31) && x <= Math.pow(2, 31) - 1) {
    if (x < 0) {
      numberString = x.toString();
      numberString = numberString.replace("-", "");

      for (let i = numberString.length - 1; i >= 0; i--) {
        reverseString = reverseString + numberString[i];
      }

      reverseString = "-" + reverseString;
      reversedNumber = parseInt(reverseString);

      return reversedNumber <= -Math.pow(2, 31) ||
        reversedNumber >= Math.pow(2, 31) - 1
        ? 0
        : reversedNumber;
    }

    numberString = x.toString();

    for (let i = numberString.length - 1; i >= 0; i--) {
      reverseString = reverseString + numberString[i];
    }

    reversedNumber = parseInt(reverseString);

    return reversedNumber <= -Math.pow(2, 31) ||
      reversedNumber >= Math.pow(2, 31) - 1
      ? 0
      : reversedNumber;
  } else {
    return 0;
  }
};

let x = -2147483648;

console.log(reverse(x));
