/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }

//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }

//   return longest;
// };

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let start = 0;
//   let seen = {};
//   let longest = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (seen[s[i]]) {
//       start = Math.max(longest, i);
//     }

//     longest = Math.max(longest, i - start + 1);

//     seen[s[i]] = i + 1;
//   }

//   return longest;
// };

const lengthOfLongestSubstring = (s) => {
  let seen = {};
  let start = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      start = Math.max(start, seen[s[i]]);
    }

    length = Math.max(length, i - start + 1);
    seen[s[i]] = i + 1;
  }

  return length;
};

var string = "dvdf";

console.log(lengthOfLongestSubstring(string));
