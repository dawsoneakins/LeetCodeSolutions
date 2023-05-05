/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combinedArray = [...nums1, ...nums2];
  combinedArray.sort((a, b) => a - b);
  let arrayMiddle = 0;
  let arraySize = combinedArray.length;
  let median;
  let firstOddMiddleValue = 0;
  let secondOddMiddleValue = 0;

  if (arraySize === 1) {
    return (median = combinedArray[0]);
  }

  if (arraySize % 2 === 0) {
    arrayMiddle = combinedArray.length / 2;

    firstOddMiddleValue = combinedArray[arrayMiddle];
    secondOddMiddleValue = combinedArray[arrayMiddle - 1];

    median = (firstOddMiddleValue + secondOddMiddleValue) / 2;

    return median;
  }

  arrayMiddle = Math.floor(combinedArray.length / 2);
  median = combinedArray[arrayMiddle];
  return median;
};

let nums1 = [];
let nums2 = [1, 2, 3, 4, 5];

console.log(findMedianSortedArrays(nums1, nums2));
