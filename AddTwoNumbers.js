/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// var addTwoNumbers = function (l1, l2) {
//   var firstSortedList = l1.reverse();
//   var firstList = firstSortedList.toString();
//   var firstUpdatedList = firstList.replaceAll(",", "");
//   var firstListValues = parseInt(firstUpdatedList);

//   var secondSortedList = l2.reverse();
//   var secondList = secondSortedList.toString();
//   var secondUpdatedList = secondList.replaceAll(",", "");
//   var secondListValues = parseInt(secondUpdatedList);

//   return firstListValues + secondListValues;
// };

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
