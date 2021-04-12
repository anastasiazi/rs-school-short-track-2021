/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  if (array === undefined || array.length === 0) {
    return [];
  }

  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const elem = array[i];
    const fileSameNameCount = array.slice(0, i).filter((x) => x === elem).length;
    const fileSameIndexNameCount = result.slice(0, i).filter((x) => x === elem).length;

    if (fileSameNameCount > 0) {
      result.push(elem.concat('(').concat(fileSameNameCount).concat(')'));
    } else if (fileSameIndexNameCount > 0) {
      result.push(elem.concat('(').concat(fileSameIndexNameCount).concat(')'));
    } else {
      result.push(elem);
    }
  }
  return result;
}

module.exports = renameFiles;
