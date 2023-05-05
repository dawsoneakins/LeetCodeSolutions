/**
 * @param {string} s
 * @return {string}
 */
//Work in Progress
var longestPalindrome = function (s) {
  let longest = 0;
  let start = 0;
  let seen = {};
  let longestPalindromicSubstring = "";

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      start = Math.max(start, i);
    }

    longest = Math.max(longest, i - start + 1);
    seen[s[i]] = i;
    longestPalindromicSubstring = longestPalindromicSubstring + s[i];
  }

  return longestPalindromicSubstring;
};

let s = "babad";

console.log(longestPalindrome(s));
