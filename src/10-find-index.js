/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, num) {
  let first = 0;
  let last = array.length;
  let middleIndex = Math.floor((first + last) / 2);
  while (array[middleIndex] !== num && first <= last) {
    if (array[middleIndex] < num) {
      first = middleIndex + 1;
    } else {
      last = middleIndex - 1;
    }
    middleIndex = Math.floor((first + last) / 2);
  }
  return middleIndex;
}

module.exports = findIndex;
