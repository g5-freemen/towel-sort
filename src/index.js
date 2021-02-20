module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  let newArr = [];
  for (let i=0; i<matrix.length; i++) {
    newArr = newArr.concat(i%2 ? matrix[i].reverse() : matrix[i]);
  }
  return newArr;
}