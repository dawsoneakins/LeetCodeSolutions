// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   var targetNumbers = [];
//   for (var i = 0; i < nums.length; i++) {
//     console.log(nums.length);
//     for (var j = nums.length - 1; j > 0; j--) {
//       console.log(nums[i], nums[j]);
//       if (i !== j) {
//         if (nums[i] + nums[j] === target) {
//           return (targetNumbers = [i, j]);
//         }
//       }
//     }
//   }
//   return targetNumbers;
// };

var twoSum = function (nums, target) {
  const hashTable = {};

  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hashTable.hasOwnProperty(complement)) {
      return [hashTable[complement], i];
    }

    hashTable[nums[i]] = i;
  }

  return [];
};

var nums = [1, 3, 4, 2];
var target = 6;

console.log(twoSum(nums, target));
