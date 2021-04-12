/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let prevLetter;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);
    if (prevLetter === undefined) {
      prevLetter = letter;
      count++;
    } else if (prevLetter !== letter) {
      result = result.concat(count > 1 ? count : '').concat(prevLetter);
      count = 1;
      prevLetter = letter;
    } else {
      count++;
    }
    if (i === str.length - 1) {
      result = result.concat(count > 1 ? count : '').concat(prevLetter);
    }
  }
  return result;
}

module.exports = encodeLine;
