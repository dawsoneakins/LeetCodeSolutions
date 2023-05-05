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

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let listOne = l1;
  let listTwo = l2;
  let carry = 0;
  let sum = 0;
  let sumList = new ListNode(0);
  let current = sumList;

  while (listOne || listTwo || carry) {
    sum = carry;

    if (listOne) {
      sum += listOne.val;
      listOne = listOne.next;
    }

    if (listTwo) {
      sum += listTwo.val;
      listTwo = listTwo.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return sumList.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);

console.log(result);
