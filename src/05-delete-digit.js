/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = Array.from(n.toString(10)).map((x) => +x);
  const i = array.indexOf(Math.min(...array));
  array.splice(i, 1);
  return +array.join('');
}

module.exports = deleteDigit;
