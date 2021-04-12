/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n.toString(10);
  while (number.length > 1) {
    const sum = number.split('').map((x) => +x).reduce((a, b) => a + b, 0);
    number = sum.toString(10);
  }
  return +number;
}
module.exports = getSumOfDigits;
