function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array.shift();

  const leftArr = array.filter(el => el < pivot);
  const rightArr = array.filter(el => el >= pivot);

  const leftSort = quickSort(leftArr);
  const rightSort = quickSort(rightArr);

  return leftSort.concat(pivot, rightSort)
}


module.exports = {
  quickSort
};
