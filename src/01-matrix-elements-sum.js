/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const disabledColumn = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const elem = matrix[i][j];
      if (elem === 0) {
        disabledColumn[j] = true;
      } else if (disabledColumn[j] !== true) {
        result += elem;
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
