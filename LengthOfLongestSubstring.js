/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
};

var string = "abcabcbb";

console.log(lengthOfLongestSubstring(string));
